# node-todo-api
mongodbとmongooseとexpressとherokuとPostmanとRobo3Tを使って, ローカルでの開発環境($ node server.js)とテスト環境($ npm test)とheroku上での, DBのJSON形式でのデータの新規作成(POST)/閲覧(GET)/削除(DELETE)/編集(PATCH)機能を実装.

## テスト環境を動かすには,
1. `mongod --dbpath ~/mongodbを置いておくお好きなディレクトリ`  
で, ローカルな場にmongodbを起動させる.
2. `npm test` か `npm run test-watch`  
で, テスト環境を実行.
3. Robo 3Tでmongodbの中身を見てみよう.

## 開発環境を動かすには,
1. `mongod --dbpath ~/mongodbを置いておくお好きなディレクトリ`  
で, ローカルな場にmongodbを起動させる.
2. `node server/server.js`  
で, 開発環境を実行.
3. Postmanで色々設定して, 色々操作して, Robo 3Tでmongodbの中身を見てみよう.

## デプロイ先はこちら
https://murmuring-beach-81397.herokuapp.com  
Postman(https://www.getpostman.com)を使って, POST/GET/DELETE/PATCHを行えます.  
Robo 3T(https://robomongo.org)を使って, DBの中身を閲覧できます.

## 教材はこちら
https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content  
のsection 6, 7, 8
