# README
フロント：React  
API：Ruby on rails  
の構成でのアプリ作成練習  

## 手順  
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
axios  
ブラウザおよびnode.js用のPromiseベースのHTTPクライアント。Get やPostなどをPromise による非同期通信で実行出来る。  
`npm install axios --save`

