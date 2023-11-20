const http = require("http");

console.log("Hello World");

const array = ["Post 1", "Post 2", "Post 3"];

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/posts" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        data: array,
      })
    );
  }
  if (req.url === "/posts" && req.method === "POST") {
    console.log("POST METHOD======");
    let data = "";
    req.on("data", function (chunk) {
      console.log("chunk request:");
      console.log(chunk);
      data += chunk;
    });

    req.on("end", function () {
      console.log("body request:");
      console.log(data);
      array.push(data);
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        data: array,
      })
    );
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);

//

const express = require("express");

const app = express();

const arr = ["Post 1", "Post 2", "Post 3"];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json({ data: arr });
});

app.post("/posts", (req, res) => {
  console.log(req.body);
  res.json("Post Added");
});

app.listen(8000);
