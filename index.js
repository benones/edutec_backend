const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  // Adicione esta linha //npm init -y // npm install express mysql2 body-parser

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Habilitar CORS para todas as requisições
app.use(cors());

// Configuração de conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Altere conforme seu usuário do MySQL
    password: 'R@0tR@0t',  // Altere conforme sua senha do MySQL
    database: 'edutec'  // Certifique-se de que o banco de dados existe
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});
// Rota para adicionar nome e sobrenome ao banco de dados
app.post('/add', (req, res) => {
    // Extrai 'nome' e 'sobrenome' do corpo da requisição (enviado como JSON)
    const { nome, sobrenome } = req.body;

    // Verifica se 'nome' e 'sobrenome' foram fornecidos
    if (!nome || !sobrenome) {
        // Se algum dos campos estiver ausente, retorna uma resposta com status 400 (Bad Request) e uma mensagem de erro
        return res.status(400).send('Nome e sobrenome são obrigatórios!');
    }

    // Consulta SQL para inserir os dados no banco de dados
    const query = 'INSERT INTO users (nome, sobrenome) VALUES (?, ?)';

    // Executa a consulta no banco de dados, inserindo 'nome' e 'sobrenome'
    connection.query(query, [nome, sobrenome], (err, results) => {
        // Verifica se houve erro ao executar a consulta
        if (err) {
            // Loga o erro no console e retorna uma resposta com status 500 (Internal Server Error) ao cliente
            console.error('Erro ao inserir dados: ' + err.stack);
            return res.status(500).send('Erro ao inserir dados');
        }
        // Se a inserção foi bem-sucedida, envia uma mensagem de sucesso ao cliente
        res.send('Dados inseridos com sucesso!');
    });
});

// Iniciar o servidor na porta especificada e logar a URL do servidor no console
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});