const http = require('http');

const hostname = '127.0.0.1';//Endereço do servidor
const port = 3000 //Porta do servidor

const serve = http.createServer((req, res) => { //Criando o servidor
    res.statusCode = 200 // Status ok de resposta
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola, meu nome é Kaio. tenho 18 anos.');
});

serve.listen(port, hostname, () => { 

    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})
