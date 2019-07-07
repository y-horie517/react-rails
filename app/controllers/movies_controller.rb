class MoviesController < ApplicationController
    before_action :find_movie, only: [
        :show, :update, :destroy
      ]
    after_action :numbering, only: [:create, :destroy]

    def index
        @movies = Movie.all
        render json: @movies
    end

    def create
        @movie = Movie.new(movie_params)
        # 入力されたURL（動画ID）からサムネイル取得、埋め込み用のURLを生成
        @movie.thumbnail = "https://i.ytimg.com/vi/" + @movie.url + "/default.jpg"
        @movie.url = "https://www.youtube.com/embed/" + @movie.url
        @movie.save
        render json: @movie
    end

    def destroy
        @movie.destroy
        head :no_content
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :description, :url, :thumbnail)
    end

    def find_movie
        @movie = Movie.find(params[:id])
    end

    #通し番号をつける
    def numbering
        num = 1
        movies = Movie.all
        movies.each do |m|
            m.num = num
            m.save
            num += 1
        end
    end
end
