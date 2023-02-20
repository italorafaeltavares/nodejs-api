## API em Node.js com operações CRUD (Create, Read, Update, Delete)

<strong>Utilizando o banco de dados MongoDB e a biblioteca Mongoose para comunicação com o banco</strong>

Esta API foi desenvolvida utilizando a tecnologia do <a href="https://chat.openai.com/auth/login">ChatGPT</a><br><br>

1. Instale o <a href="https://nodejs.org/en/download/">Node.js</a> e o <a href="https://www.mongodb.com/try/download/community">MongoDB</a> em seu computador. Em seguida crie o <a href="#mongo">banco de dados</a>. 

2. Clone este projeto:
````
git clone https://github.com/italorafaeltavares/nodejs-api.git
````
3. Acesse o projeto:
````
cd nodejs-api
````
4. Instale as dependências necessárias com o comando:
```
npm install express mongoose body-parser --save.
```
5. Inicie a API utilizando:
```
npm start
```
<hr>

# Descrição da construção

* Crie uma pasta para o projeto e abra-a em um terminal.
* Inicie o projeto Node.js com o comando:
```
 npm init
```
* Instale as dependências necessárias com o comando:
```
npm install express mongoose body-parser --save.
```

* Agora, vamos criar a estrutura de pastas e arquivos do projeto:

```
├── node_modules/
├── models/
│   └── user.js
├── routes/
│   └── user.js
├── app.js
└── package.json
```
<hr>

<p id="mongo">Para criar o banco de dados MongoDB para o exemplo desta API, sigua os seguintes passos:</p>

1. Certifique-se de que o MongoDB esteja instalado e em execução em seu computador.
2. Abra um terminal e execute o comando `mongo`. Isso irá iniciar o shell do MongoDB.
3. Digite o comando `use api-crud` para criar um novo banco de dados chamado "api-crud".
Para criar a coleção de usuários, digite o comando `db.createCollection("users")`.
Para inserir um usuário na coleção, digite o comando:

```
db.users.insert({
  name: "João",
  email: "joao@example.com",
  password: "123456",
});

```

Verifique se o usuário foi inserido corretamente digitando o comando `db.users.find()` . Isso deve retornar o usuário que acabamos de inserir.

Pronto! Agora você tem um banco de dados funcional para o exemplo desta API. É importante lembrar que, em um ambiente de produção, você precisaria configurar o banco de dados de forma diferente, por exemplo, usando uma conexão segura e autenticação.

<hr>

Para iniciar a API, você deve adicionar um script no arquivo package.json que execute o arquivo app.js da sua aplicação. Para isso, você pode adicionar o seguinte código no objeto "scripts" do seu package.json:
```
"start": "node app.js"
```
Isso criará um novo script chamado "start" que executará o arquivo app.js com o Node.js. Para iniciar a sua API, basta executar o comando npm start no terminal, que irá executar o arquivo app.js e iniciar o servidor.

Fico a disposição para tirar dúvidas. 
