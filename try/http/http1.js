const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/slow") {
        setTimeout(() => {
            res.end("SLOW RESPONSE");
        }, 5000);
    } else {
        res.end("FAST RESPONSE");
    }
}).listen(3000, () => {
    console.log("HTTP/1.1 server on port 3000");
});
