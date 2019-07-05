import React from "react"
import Iframe from 'react-iframe'

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { movies } = this.props
    const list = movies.map(movie => {
      return (
          <div className="">
            <p>{movie.id}. {movie.title}</p>
            <p>{movie.description}</p>
            {/* 埋め込みコード */}
            <Iframe url={movie.url}
              width="560px"
              height="315px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
          </div>
      )
    })

    // 表示部分
    return (
      <div>
        <h2>MovieList</h2>
        <div>{list}</div>
      </div>
    )
  }
}

export default MovieList