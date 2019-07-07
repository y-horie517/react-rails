# README
## 概要
YouTube動画のお気に入りリストを作るアプリケーション  
フロントエンド：React   
API：Ruby on rails   
の構成でのアプリ作成練習  

 
<img width="750" alt="スクリーンショット 2019-07-07 11 18 37" src="https://user-images.githubusercontent.com/47136469/60763162-80109b80-a0a9-11e9-943e-c73a263a0f49.png">

## 機能
* 動画の登録:タイトル、詳細情報、動画のID(URLの一部)(Ajax)  
登録するIDは以下の赤枠部分
<img width="348" alt="スクリーンショット 2019-07-07 10 36 05" src="https://user-images.githubusercontent.com/47136469/60762880-bfd48480-a0a3-11e9-8f6c-957463a33bd3.png">

* 登録動画の削除(Ajax)
* 動画登録、削除時の自動採番
* 登録した動画IDから「動画の埋め込みコード」「サムネイルの画像パス」を生成
* サムネイルクリック時に埋め込み動画をモーダルで表示

## デモ
* 登録・削除  
![タイトルなし1](https://user-images.githubusercontent.com/47136469/60763123-aaae2480-a0a8-11e9-9f42-1d60f9a38f80.gif)
* モーダル表示・消去  
![タイトルなし](https://user-images.githubusercontent.com/47136469/60763119-a550da00-a0a8-11e9-8627-bbb3e925aed1.gif)

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
