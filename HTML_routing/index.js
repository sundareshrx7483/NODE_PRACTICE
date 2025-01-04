const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    try {
      //req.url
      if (req.url === "/") {
          res.writeHead(200, { "content-type": "text/html" });
          res.end("Home Page")
      }
      else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("About Page") 
      }
      else if (req.url === "/api") {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify({
              firstname: "Sundaresh",
              lastname:"Sekar"
          }))
      }
      else {
          res.writeHead(400, { "content-type": "text/html" })
          res.end("404 Page Not Found !")
        }
    } catch (err) {
      console.error(err);
    }
  })
  .listen(3002, () => {
    console.log("server running on port 3002");
  });
