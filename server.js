const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var hall ={
    id: null,
    name: "",
    isReserved: false,
    reservedFrom: null,
    reservedUntil: null,
    }

let polje = new Array();
let string = "";

polje.push(hall);
polje[0].name = "Velika dvorana";
string += polje[0].name + ",";

polje.push(hall);
polje[1].name="Mala dvorana";
string += polje[1].name + ","

polje.push(hall);
polje[2].name="Konferencijska dvorana";
string += polje[2].name;

console.log(string);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(string);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});