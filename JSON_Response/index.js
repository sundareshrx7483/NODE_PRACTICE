const server = require("http");
server
  .createServer((req, res) => {
    const actor = {
      firstname: "Ajith",
      lastname: "kumar",
    };
    res.writeHead(200, { "content-type": "text/html" });
    res.end(JSON.stringify(actor));
  })
  .listen(3000, () => {
    console.log("server running on localhost:3000");
  });
