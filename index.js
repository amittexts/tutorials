const http = require('http')


var server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcome to Home page')
    }else if(req.url==='/contactus'){
        res.end('Welcome to contact us page')
    }else{
        res.end(`<h1>404 Error</h1>    
        <a href='/'><button>home</button></a>`)       
    }   
})
server.listen(3000)