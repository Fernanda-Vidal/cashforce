## Sobre o projeto

<div align="justify">
O projeto consiste em uma aplicação fullstack desenvolvida para gestão, organização e sistematização dos processos financeiros, realizado para o desafio técnico do processo seletivo.
Foi desenvolvida uma API Restfull, utilizando node.js e express, com o ORM Sequelize para mapeamento do banco de dados SQL. O front-end da aplicação foi desenvolvido o Vue.js, utilizando a biblioteca de componentes Vuetify.

A aplicação possui uma tela de login, onde, a partir do email do usuário, é coletado o id do mesmo e a aplicação é redirecionada para uma tela onde são listadas todas as notas fiscais pertencentes ao usuário logado.
Também é possível visualizar algumas informações do cedente, clicando no botão existente em cada card.
</div>

## Para rodar o projeto

<div align="justify">
Após clonar o projeto, rode o comando 'npm install' na raiz e configure as variáveis de ambiente, de acordo com o arquivo .env.example. No diretório backend rodar o comando 'npm run db' para iniciar o banco de dados com o sequelize e na sequência 'npm run dev' para iniciar o node(nodemon).
No diretório do front-end, rodar o comando npm run serve, para subir o Vue.js.
</div>

# API

## Endpoints de usuário

<div align="justify">

- para criar um novo usuário: POST 'localhost:3001/user/'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

      {
        "name": "",
        "email": "",
        "phoneNumber": "",
        "mobile": "",
        "departament": "",
        "verificationCode": "",
        "emailCheked": "",
        "cashForceAdm": ""
      }

- para listar todos os usuários: GET 'localhost:3001/user/'

- para listar usuário por id: GET 'localhost:3001/user/:id'

- para logar: POST 'localhost:3001/user/login'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
        "email": "",
    }

- para atualizar o usuário: PUT 'localhost:3001/user/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

      {
        "name": "",
        "email": "",
        "phoneNumber": "",
        "mobile": "",
        "departament": "",
        "verificationCode": "",
        "emailCheked": "",
        "cashForceAdm": ""
      }

- para deletar o CNPJ: DELETE 'localhost:3001/user/:id'

</div>

## Endpoints de CNPJ
<div align="justify">

- para cadastrar um novo CNPJ: POST 'localhost:3001/CNPJ/'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

      {
        "cnpj": "",
        "companyType": ""
      }

- para listar todos os CNPJs: GET 'localhost:3001/CNPJ/'

- para listar CNPJ por id: GET 'localhost:3001/CNPJ/:id'

- para atualizar o usuário: PUT 'localhost:3001/CNPJ/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
        "cnpj": "",
        "companyType": ""
    }

- para deletar o CNPJ: DELETE 'localhost:3001/CNPJ/:id'
</div>

## Endpoints de CNPJ
<div align="justify">

- para cadastrar um novo CNPJ: POST 'localhost:3001/order/'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
        "orderNFId": "",
        "orderNumber": "",
        "orderPath": "",
        "orderFileName": "",
        "orderOriginalName": "",
        "emissionDate": "",
        "pdfFile": "",
        "emitedTo": "",
        "nNF": "",
        "CTE": "",
        "value": "",
        "cnpjId": "",
        "userId": "",
        "buyerId": "",
        "providerId": "",
        "orderStatusBuyer": "",
        "orderStatusProvider": "",
        "deliveryReceipt": "",
        "cargoPackingList": "",
        "deliveryCtrc": ""
    }

- para listar todos as Orders: GET 'localhost:3001/order/'

- para listar orders por id: GET 'localhost:3001/order/:id'

- para listar orders por id do usuário: GET 'localhost:3001/order/user/:id'

- para atualizar a order: PUT 'localhost:3001/order/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "orderNFId": "",
       "orderNumber": "",
       "orderPath": "",
       "orderFileName": "",
       "orderOriginalName": "",
       "emissionDate": "",
       "pdfFile": "",
       "emitedTo": "",
       "nNF": "",
       "CTE": "",
       "value": "",
       "cnpjId": "",
       "userId": "",
       "buyerId": "",
       "providerId": "",
       "orderStatusBuyer": "",
       "orderStatusProvider": "",
       "deliveryReceipt": "",
       "cargoPackingList": "",
       "deliveryCtrc": ""
    }

- para deleter a order: DELETE 'localhost:3001/order/:id'
</div>

## Endpoints de Buyer
<div align="justify">

- para cadastrar um novo Buyer: POST 'localhost:3001/buyer/'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "name": "",
       "tradingName": "",
       "cashForceTax": "",
       "responsibleName": "",
       "responsibleEmail": "",
       "responsiblePosition": "",
       "responsiblePhone": "",
       "responsibleMobile": "",
       "website": "",
       "postalCode": "",
       "address": "",
       "number": "",
       "complement": "",
       "neighborhood": "",
       "city": "",
       "state": "",
       "phoneNumber": "",
       "situation": "",
       "situationDate": "",
       "cnpjId": "",
       "confirm": "",
       "email": ""
    }

- para listar todos os Buyers: GET 'localhost:3001/buyer/'

- para listar Buyers por id: GET 'localhost:3001/buyer/:id'

- para atualizar Buyer: PUT 'localhost:3001/buyer/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "name": "",
       "tradingName": "",
       "cashForceTax": "",
       "responsibleName": "",
       "responsibleEmail": "",
       "responsiblePosition": "",
       "responsiblePhone": "",
       "responsibleMobile": "",
       "website": "",
       "postalCode": "",
       "address": "",
       "number": "",
       "complement": "",
       "neighborhood": "",
       "city": "",
       "state": "",
       "phoneNumber": "",
       "situation": "",
       "situationDate": "",
       "cnpjId": "",
       "confirm": "",
       "email": ""
    }

- para deleter uma Buyer: DELETE 'localhost:3001/buyer/:id'
</div>

## Endpoints de Provider
<div align="justify">

- para cadastrar um novo Provider: POST 'localhost:3001/provider'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "name": "",
       "tradingName": "",
       "cashForceTax": "",
       "responsibleName": "",
       "responsibleEmail": "",
       "responsiblePosition": "",
       "responsiblePhone": "",
       "responsibleMobile": "",
       "website": "",
       "postalCode": "",
       "address": "",
       "number": "",
       "complement": "",
       "neighborhood": "",
       "city": "",
       "state": "",
       "bank": "",
       "bankAgency": "",
       "account": "",
       "documents": "",
       "phoneNumber": "",
       "situation": "",
       "situationDate": "",
       "cnpjId": "",
       "email": ""
    }

- para listar todos os Providers: GET 'localhost:3001/provider'

- para listar Provider por id: GET 'localhost:3001/provider/:id'

- para atualizar Provider: PUT 'localhost:3001/provider/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "name": "",
       "tradingName": "",
       "cashForceTax": "",
       "responsibleName": "",
       "responsibleEmail": "",
       "responsiblePosition": "",
       "responsiblePhone": "",
       "responsibleMobile": "",
       "website": "",
       "postalCode": "",
       "address": "",
       "number": "",
       "complement": "",
       "neighborhood": "",
       "city": "",
       "state": "",
       "bank": "",
       "bankAgency": "",
       "account": "",
       "documents": "",
       "phoneNumber": "",
       "situation": "",
       "situationDate": "",
       "cnpjId": "",
       "email": ""
    }

- para deleter um Provider: DELETE 'localhost:3001/provider/:id'
</div>

## Endpoints de Sponsor
<div align="justify">

- para cadastrar um novo Sponsor: POST 'localhost:3001/sponsor'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "name": "",
       "tradingName": "",
       "cashForceTax": "",
       "responsibleName": "",
       "responsibleEmail": "",
       "responsiblePosition": "",
       "responsiblePhone": "",
       "responsibleMobile": "",
       "website": "",
       "postalCode": "",
       "address": "",
       "number": "",
       "complement": "",
       "neighborhood": "",
       "city": "",
       "state": "",
       "bank": "",
       "bankAgency": "",
       "account": "",
       "phoneNumber": "",
       "situation": "",
       "situationDate": "",
       "cnpjId": "",
       "email": ""
    }

- para listar todos os Sponsors: GET 'localhost:3001/sponsor'

- para listar Sponsor por id: GET 'localhost:3001/sponsor/:id'

- para atualizar Sponsor: PUT 'localhost:3001/sponsor/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "name": "",
       "tradingName": "",
       "cashForceTax": "",
       "responsibleName": "",
       "responsibleEmail": "",
       "responsiblePosition": "",
       "responsiblePhone": "",
       "responsibleMobile": "",
       "website": "",
       "postalCode": "",
       "address": "",
       "number": "",
       "complement": "",
       "neighborhood": "",
       "city": "",
       "state": "",
       "bank": "",
       "bankAgency": "",
       "account": "",
       "documents": "",
       "phoneNumber": "",
       "situation": "",
       "situationDate": "",
       "cnpjId": "",
       "email": ""
    }

- para deleter um Sponsor: DELETE 'localhost:3001/sponsor/:id'
</div>

## Endpoints de OrderPortion
<div align="justify">

- para cadastrar um novo OrderPortion: POST 'localhost:3001/orderportion/'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "nDup": "",
       "dVenc": "",
       "vDup": "",
       "availableToMarket": "",
       "orderId": ""
    }

- para listar todos os OrderPortion: GET 'localhost:3001/portion-order'

- para listar OrderPortion por id: GET 'localhost:3001/portion-order/:id'

- para atualizar OrderPortion: PUT 'localhost:3001/portion-order/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "nDup": "",
       "dVenc": "",
       "vDup": "",
       "availableToMarket": "",
       "orderId": ""
    }

- para deleter um OrderPortion: DELETE 'localhost:3001/portion-order/:id'
</div>

## Endpoints de Offer
<div align="justify">

- para cadastrar um novo Offer POST 'localhost:3001/offer/'

Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
       "tax": "",
       "tariff": "",
       "adValorem": "",
       "float": "",
       "iof": "",
       "expiresIn": "",
       "paymentStatusSponsor": "",
       "paymentStatusProvider": "",
       "orderId": "",
       "sponsorId": ""
    }

- para listar todos os Offers: GET 'localhost:3001/offer/'

- para listar Offer por id: GET 'localhost:3001/offer/:id'

- para atualizar Offer: PUT 'localhost:3001/offer/:id'

 Enviar no corpo da requisição um objeto no seguinte formato contendo: 

    {
        "tax": "",
        "tariff": "",
        "adValorem": "",
        "float": "",
        "iof": "",
        "expiresIn": "",
        "paymentStatusSponsor": "",
        "paymentStatusProvider": "",
        "orderId": "",
        "sponsorId": ""
    }

- para deleter um Offer: DELETE 'localhost:3001/offer/:id'
</div>