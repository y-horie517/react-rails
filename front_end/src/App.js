import React from "react"
// import "./App.scss"

import AddMovie from "./components/AddMovie"
import MovieList from "./components/MovieList"

import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }

    this.host = "http://localhost:3001/"
  }

  componentDidMount() {
    axios
      .get(`${this.host}movies`)
      .then(res => {
        this.setState({ movies: res.data })
      })
      .catch(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <AddMovie OnSubmitTitle={this.addTodo} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }

  // deleteTodo = id => {
  //   const { todos } = this.state

  //   axios
  //     .delete(`${this.host}todos/${id}`)
  //     .then(res => {
  //       this.setState({
  //         todos: todos.filter(todo => {
  //           return todo.id !== id
  //         }),
  //       })
  //     })
  //     .catch(data => {
  //       console.log(data)
  //     })
  // }

  AddMovie = movie => {
    const { movies } = this.state
    axios
      .post(`${this.host}movies`, movie)
      .then(res => {
        this.setState({
          movies: [...movies, res.data],
        })
      })
      .catch(data => {
        console.log(data)
      })
  }
}

export default App