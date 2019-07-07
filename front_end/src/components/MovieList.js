import React from "react"
import DeleteMovieLink from "./DeleteMovie"
import Iframe from 'react-iframe'

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state={isModalOpen: false};
  }

  // モーダル表示用
  handleClickMovie(){
    this.setState({isModalOpen: true});
  }
  // モーダル消去用
  handleClickClose(){
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    const { movies, getMovies } = this.props

    const list = movies.map(movie => {
      // モーダルの表示する場合の内容を設定
      if(this.state.isModalOpen){
        modal = (
          <div className='modal'
            onClick={() => {this.handleClickClose()}}>
            <div className="modal-movie">
              <Iframe url={movie.url}
                width="560px"
                height="315px"
              />
              <button className='modal-close-btn'
              onClick={() => {this.handleClickClose()}}
              >とじる</button>
            </div>
          </div>
        );
      }

      return (
        <div className="movie-content">
          <img src={movie.thumbnail} className="thumbnail"
          onClick={()=>{this.handleClickMovie()}}
          />
          <p>{movie.num}. {movie.title}</p>
          <p>詳細：{movie.description}</p>
          <p>URL：{movie.url}</p>

          <DeleteMovieLink
            id={movie.id}
            title={movie.title}
            url={movie.url}
            description={movie.description}
            getMovies={getMovies}
          />
          {/* modalの中身がnilでなければ表示される */}
          {modal}
        </div>
      )
    })

    // 表示部分
    return (
      <div>
        <h2>動画一覧</h2>
        <div>{list}</div>
      </div>
    )
  }
}

export default MovieList