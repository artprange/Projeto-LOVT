const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });

    switch (req.url) {
      case "/":
        res.end("Home");
        break;
      case "/contato":
        res.end("você está na página contato!");
        break;
      default:
        res.end("Você está no nosso servidor!");
        break;
    }
  })

  .listen(3000); // se não colocarmos um hostname, ele automaticamente colocará localhost
