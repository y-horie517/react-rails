# README
フロント：React  
API：Ruby on rails  
の構成でのアプリ作成練習  

## 概要
YouTube動画のお気に入りリストを作るアプリケーション

## 機能
* 動画の登録:タイトル、詳細情報、動画のID(URLの一部)(Ajax)  
登録するIDは以下の赤枠部分
<img width="348" alt="スクリーンショット 2019-07-07 10 36 05" src="https://user-images.githubusercontent.com/47136469/60762880-bfd48480-a0a3-11e9-8f6c-957463a33bd3.png">

* 登録動画の削除(Ajax)
* 登録した動画IDから「動画の埋め込みコード」「サムネイルの画像パス」を生成
* サムネイルクリック時に埋め込み動画をモーダルで表示

## デモ
![gif1](https://user-images.githubusercontent.com/47136469/60762939-c283a980-a0a4-11e9-8fd1-a55734f2db1d.gif)
![gif2](https://user-images.githubusercontent.com/47136469/60762940-c44d6d00-a0a4-11e9-9c0a-799538622abe.gif)

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
