# todolist
To-do list desenvolvida em node.js, nela você pode adicionar seus afazeres podendo deleta-los, edita-los e lista-los.
Este projeto web foi criado utilizando Node.js no back-end e utilizando HTML e CSS no frontend. 
O projeto consiste numa aplicação web utilizando conceitos de CRUD.

Bibliotecas utilizadas no projeto:
- Express;
- Ejs;
- Mysql;
- Sequelize; 

<hr>
<h1>Como instalar as dependências:</h1>
<p>Para instalar as dependências foi utilizado o gerenciador de pacotes NPM.</p>

<p>Express: npm install express</p>

<p>Ejs: npm install ejs</p>

<p>Mysql: npm install --save mysql2</p>

<p>Sequelize: npm install sequelize</p>

<hr>
<h1> Banco de dados:</h1>
<p>Para configurar o banco de dados da aplicação, basta abrir o arquivo database.js (localizo dentro da pasta database) e alterar os valores das seguintes variaveis:</p>
var user = ""; <br>
var password = ""; <br>
<p>Altere os valores de acordo com o seu banco de dados Mysql.</p>
<hr>
<h1>Tabelas:</h1>
<p>As tabelas são geradas automaticamente dentro do arquivo model, para ativar a criação automática da mesma, basta ir no arquivo model/Tasks.js <br> 
Após fazer isso, haverá um trecho de código em comentário: "//Tasks.sync({force:true};", tire do comentário, rode a aplicação e após isso deixe-o em comentário novamente
</p>


