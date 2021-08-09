const http = require('http')

function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

http.createServer((req,res) => {
  const {url, method, header} = req;
 
    let body = {
        id: randomNum(1,10),
        title: `Producto ${randomNum(1,10)}`,
        price: randomNum(0.00,9999.99),
        thumbnail: `Foto ${randomNum(1,10)}`,
    };

    res.end(JSON.stringify(body));

}).listen(3000, function () {
  console.log(this.address().port)
});