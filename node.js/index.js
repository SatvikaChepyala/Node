const http = require('http');
const fs =require('fs');
const path = require('path');

http.createServer((req,res)=>{
  console.log(req.url);

  if(req.url ==='/'){//homepage
    fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{

      if (err) throw err ;
      res.writeHead(200,{'content-Type':'text/html'})
      res.end(content)

    })
    
  }
  else if(req.url ==='/about'){//homepage
    fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{

      if (err) throw err ;
      res.writeHead(200,{'content-Type':'text/html'})
      res.end(content)

    })
  }
  else if (req.url==='/api'){
    fs.readFile(path.join(__dirname,'public','db.json'),(err,content)=>{

      if (err) throw err ;
      res.writeHead(200,{'content-Type':'application/json'})
      res.end(content)

  })

}
  

}).listen(5959,()=>console.log("server is running"));

//http.createServer((req,res)=>{}).listen(5959,()=>console.log("server running"));