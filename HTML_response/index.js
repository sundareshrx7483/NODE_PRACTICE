const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    fs.createReadStream(__dirname+"/index.html").pipe(res)

    // const htmlFile = fs.readFileSync("./index.html", "utf-8")
    // res.end(htmlFile)
}).listen(3001, () => {
    console.log("server running on port 3001")
})