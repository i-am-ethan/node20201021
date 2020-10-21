//webサーバをつくる


//httpオブジェクトを生成する
const http = require('http');
//createServerメソッドでサーバオブジェクトを生成する
//createServerメソッドは引数にサーバーリクエストを受けた際に動作させるコールバック関数を指定する。
const server = http.createServer(function(req,res){
  //httpヘッダを書きだす
  //第一引数がステータスコード
  //第二引数がヘッダ情報の連想配列
  res.writeHead(200,{
    'Content-Type': 'text/plain'
  });
  //writeメソッドでhtmlコンテンツを書き出す
  res.write('Hello World');
  //endメソッドでhttpコンテンツ出力を完了する
  res.end();
})
//ポート番号を指定してサーバを待ち受け状態にする
server.listen(1234);
console.log('サーバを起動しました');

