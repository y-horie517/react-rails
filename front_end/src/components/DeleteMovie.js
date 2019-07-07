import React from 'react';

class DeleteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.host = "http://localhost:3001/"
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie(id) {
    // moviesコントローラのdeleteアクション
    let request = new Request(`${this.host}movies/${this.props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    fetch(request).then(function (response) {
      return response;
    }).then(() => {
      // 完了後に一覧を取得
      this.props.getMovies();
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <a href="#" onClick={() => this.deleteMovie(this.props.id)}>削除</a>
    )
  }
}

export default DeleteMovie;