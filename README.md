APIモードで Rails アプリを作成

bundle exec rails new . --database=postgresql --api


create-react-app をインストール
$ yarn global add create-react-app

# もしくは
$ npm install -g create-react-app


React プロジェクトの作成
Rails アプリのルートディレクトリ上で React プロジェクトを生成する。

$ create-react-app ＜React のプロジェクト名＞

# 例
$ create-react-app front_end

RailsAPI を実行するためのモジュールを追加
axios
ブラウザおよび node.js 用の Promise ベースの HTTPクライアント。Get や Post などを Promise による非同期通信で実行出来る。
npm install axios --save


# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
