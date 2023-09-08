# Teste Técnico Shopper

## Instalação
### Requisitos
- É necessário que tenha o npm instalado para rodar o projeto
- É necessário que tenha o docker instalado para rodar o banco de dados

Clone o projeto e acesse a pasta
```bash
$ git clone https://github.com/LeandroFilie/shopper-techtest.git

$ cd shopper-techtest
```

### API
Acesse a pasta da api e instale as dependências

```bash
$ cd api

$ npm install
```

Crie um container com a imagem do MySQL no docker
  - database_name: nome do banco de dados
  - user_name: nome de usuário para utilizar o MySQL
  - password: senha para utilizar o MySQL
```bash
$ docker run --name mysql -d -v /var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=database_name -e MYSQL_USER=user_name -e MYSQL_PASSWORD=password mysql:8
```

Entre no container e digite a senha
```bash
$ docker exec -it mysql1 mysql -uroot -p
```

Escolha o banco de dados e copie o script que está no arquivo api/src/dabatase/database.sql
```bash
$ USE database_name # escolhendo banco de dados

msql> # cole o script aqui
```

Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente de acordo com o seu servidor de banco de dados. Exemplo: 
```env
PORT=3003
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_SCHEMA=shopper
DB_PORT=3306
```

Por fim, inicie a API
```bash
$ npm run dev
```

### Front-End
Acesse a pasta do Front-End e instale as dependências

```bash
$ cd fe

$ npm install
```

Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente de acordo com o seu servidor de banco de dados. Exemplo: 
```env
VITE_API_URL=http://localhost:3003
```

Suba um servidor local

```bash
$ npm run dev
```

Você poderá acessar atráves do link [http://localhost:5173/](http://localhost:5173/)

## Documentação da API

### Endpoints
#### Faz a validação do arquivo .csv
```
  POST /validate
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `FormData` | `{"file": File}` |


#### Faz a atualização dos preços
```
  PUT /updatePrices
```

| Parâmetro   | Tipo  | Descrição                                   |
| :---------- | :---- | :------------------------------------------ |
| `body`      | `json`| `{"products": [{"product_code": number, "new_price": number, "rules": {"missingInput": boolean,"priceIsNaN": boolean,"priceSmallerThanCost": boolean,"priceChangeGreaterThan10Percent": boolean,"notExistsProduct": boolean,"packComponentNotPresent": boolean,"packPriceNotEqualToSumOfComponents": boolean}}]}` |

### Stack utilizada
- Node.js
- TypeScript
- Express
- Multer
- Knex
- MySQL
- Docker


## Documentação do Front-End

### Stack utilizada
- React
- TypeScript
- TailwindCSS
- ESlint
- Axios
- RadixUi
- React Hot Toast
