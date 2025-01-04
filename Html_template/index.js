const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
 
    const name="Sundaresh"
    
    res.writeHead(200, { "content-type": "text/html" })
    let indexFile = fs.readFileSync("./index.html", "utf-8")
    indexFile = indexFile.replace("{{name}}", name)
    res.end(indexFile)

}).listen(3002, () => {
    console.log("server running on port 3002")
})