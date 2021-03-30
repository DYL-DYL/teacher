var exp = require('express')
var bodyparser = require('body-parser')

var app = exp()

app.use(exp.static('www'))

app.use(bodyparser.urlencoded({ extends: false }))

app.all('*', function (req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	  res.header("X-Powered-By", ' 3.2.1')
	  if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
	  else next();
	});



// 测试用的服务器
app.post('/isLogin',(req,res)=>{
    console.log(req.body);
    res.send('lalala')
})

app.listen(3000, () => {
    console.log('running.....')
})