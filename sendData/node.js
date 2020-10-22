var http = require('http');
var fs = require('fs');
//urlの文字列を解析するためのオブジェクト
var url = require('url');
//クエリ文字列を扱うためのオブジェクト
var qs = require('querystring');

var indexPage = fs.readFileSync('./index.html', 'utf-8');

var server = http.createServer(function(req,res){
  /*
  httpリクエストオブジェクトのmethodプロパティを使用して、フォームリクエストがGETなのかPOSTなのかを判断しています。
  */
  if(req.method == 'GET'){
    /*
    urlオブジェクトのparseメソッドを使って、リクエストがあったURLの解析をしている。
    */
    var urlParts = url.parse(req.url, true);
    console.log('--GET Request---');
    console.log('nameは' + urlParts.query.name);
    console.log('ageは'+urlParts.query.age);
  } else{
    var body = "";
    req.on('data', function(data){
      body += data;
    });
    req.on('end', function(){
      var params = qs.parse(body);
      console.log('---POST Request---');
      console.log('nameは'+params.name);
      console.log('ageは'+params.age);
    });
  }
  res.writeHead(200,{
    'Content-Type':'text/html'
  });
  res.write(indexPage);
  res.end();
});

server.listen(1234);
console.log('サーバを起動しました')

