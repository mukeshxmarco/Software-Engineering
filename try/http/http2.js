const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
});

server.on("stream", (stream, headers) => {
  const path = headers[":path"];

  if (path === "/slow") {
    setTimeout(() => {
      stream.end("SLOW H2");
    }, 5000);
  } else {
    stream.end("FAST H2");
  }
});

server.listen(3443, () => {
  console.log("HTTP/2 server on 3443");
});
