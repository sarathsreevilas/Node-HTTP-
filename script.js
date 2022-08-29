const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "views", "index.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "views", "about.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server  running on ${PORT}`));
