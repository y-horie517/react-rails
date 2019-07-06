import React from 'react';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props)

    // 入力フォーム(input) 用の state をセットしておく
    this.state = {
      title: '',
      description: '',
      url: ''
    }

    this.host = "http://localhost:3001/"
    //　作成するメソッドを this に bind する
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    // Rails 側の /api/v1/tasks を POST メソッドで叩き、タスクを作成する
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
    }).then((task) => {
      // 動画追加が成功したら、一覧を再取得する
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    }).finally(() => {
      this.setState({
        title: '',
        description: '',
        url: ''
      })
    });

    // preventDefault でブラウザ起因の onSubmit イベントを打ち消す
    // この記述が無いとページが遷移してしまう
    event.preventDefault();
  }

  render() {
    let { title, description, url } = this.state;

    return (
      <form onSubmit={this.addMovie}>
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
        <label>URL</label>
        <input
          type="text" value={url}
          onChange={(e) => {
            this.setState({
              url: e.target.value
            })
          }}
        />
        <input type="submit" value="動画追加" />
      </form>
    )
  }
}

export default AddMovieForm;