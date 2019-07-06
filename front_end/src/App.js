import React from "react"
import "./App.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import AddMovieForm from "./components/AddMovieForm"
import MovieList from "./components/MovieList"

class App extends React.Component {
  constructor(props) {
    super(props);

    // 動画一覧を格納する配列をstateとして初期化
    this.state = {
      movies: [],
    }
    // railsを起動しているポートを指定
    this.host = "http://localhost:3001/"

    // 動画一覧を取得するメソッドをthisにbind
    this.getTasks = this.getTasks.bind(this);
  }

  // コンポーネントマウント時にタスク一覧を取得する
  componentDidMount() {
    this.getTasks()
  }

  getTasks() {
    // 動画一覧を取得(movies)
    let request = new Request(`${this.host}movies`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then(function (movies) {
      // 取得が完了したら state にセットする
      this.setState({
        movies: movies
      });
    }.bind(this)).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <AddMovieForm getTasks={this.getTasks} className="form"/>
          <MovieList movies={this.state.movies} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App