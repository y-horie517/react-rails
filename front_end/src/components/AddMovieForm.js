import React from 'react';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props)
    // 入力フォーム用のstateをセット
    this.state = {
      title: '',
      description: '',
      url: ''
    }

    this.host = "http://localhost:3001/"
    //　作成するメソッドをthisにbind
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    // moviesコントローラのcreateアクション呼び出し
    let request = new Request(`${this.host}movies`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        url: this.state.url
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then(() => {
      // 動画追加が成功したら、一覧を再取得する
      this.props.getMovies();
    }).catch(function (error) {
      console.error(error);
    }).finally(() => {
      this.setState({
        title: '',
        description: '',
        url: ''
      })
    });

    // preventDefault でブラウザ起因のonSubmitイベントを打ち消す
    // この記述が無いとページが遷移してしまう
    event.preventDefault();
  }

  render() {
    let { title, description, url } = this.state;

    return (
        <div>
            <h2>動画追加</h2>
            <form onSubmit={this.addMovie} className="movie-form">
                <label>タイトル</label>
                <input
                type="text" value={title}
                onChange={(e) => {
                    this.setState({
                    title: e.target.value
                    })
                }}
                />
                <label>詳細情報</label>
                <input
                type="text" value={description}
                onChange={(e) => {
                    this.setState({
                    description: e.target.value
                    })
                }}
                />
                <label>URL(動画のID)</label>
                <input
                type="text" value={url}
                onChange={(e) => {
                    this.setState({
                    url: e.target.value
                    })
                }}
                />
                <input type="submit" value="動画追加" className="submitbtn"/>
            </form>
        </div>
    )
  }
}

export default AddMovieForm;