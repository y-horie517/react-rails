# README
フロント：React  
API：Ruby on rails  
の構成でのアプリ作成練習  

## 概要
YouTubeの動画のお気に入りリスト

## 機能
* 動画の登録(タイトル、詳細情報、動画のID(URLの一部))(Ajax)
* 登録動画の削除(Ajax)
* 登録した動画IDから「動画の埋め込みコード」「サムネイルの画像パス」を生成
* サムネイルクリック時に埋め込み動画をモーダルで表示


## プロジェクト作成手順  
1. APIモードで Rails アプリを作成  
`bundle exec rails new . --database=postgresql --api`


2. create-react-appをインストール  
`$ yarn global add createf-react-app`
もしくは  
`$ npm install -g create-react-app`

3. React プロジェクトの作成  
Railsアプリのルートディレクトリ上でReactプロジェクトを生成する。  
`$ create-react-app ＜React のプロジェクト名＞`  
例 `$ create-react-app front_end`

※RailsAPI を実行のためにaxiosを使用する場合  
axios:
ブラウザおよびnode.js用のPromiseベースのHTTPクライアント。Get やPostなどをPromise による非同期通信で実行出来る。  
`npm install axios --save`
