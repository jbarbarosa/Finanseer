Um projeto pessoal onde posso praticar meu conhecimento com a stack MERN.

### Baixar & utilizar localmente
Crie um arquivo .env na raíz do projeto (fora de /src) com as variáveis PORT e MONGO_URI, e atribua a elas os valores desejados.

Depois, rode os comandos:
```
npm i
npm start
```
para iniciar o servidor de desenvolvimento.

### Rotas
###### Legendas
nome-da-rota** -> rota autenticada e protegida. Para acessar, você precisa de um token válido
e da senha do usuário. São rotas sensíveis cujo acesso deve ser controlado, mesmo que o usuário
apresente um token.

nome-da-rota* -> rota autenticada. Para acessar, você precisa de um token válido. O token é recebido ao fazer login pelas rotas não autenticadas.

nome da rota -> rota aberta. Essas são as rotas de acesso à aplicação. O usuário tem livre
acesso a elas e inclusive deve utiliza-las para acessar o resto da aplicação.

(método)(tipo input/input?) -> método HTTP suportado pela rota e seus inputs com tipos. Inputs com um '?' são
opcionais.

-> (output) -> retorno da rota, quais informações a API expõe quando acessada naquela rota.

##### Lista de rotas
/user

  (POST /)(string email, string password, string firstName, string lastName) -> (token)

  (GET /)(string email, string password) -> (token)

/account

  (POST /**)(string bankName, number number, string password) -> (string accountId)

  (PUT /**)(string accountId, string bankname? string typeOfAccount? number number? number balance) -> (mensagem de confirmação das atualizações)

  (PUT /status**)(number accountId, boolean status) -> (mensagem de confirmação da atualização)

  (GET /balance*)(number accountId) -> (number balance)

  (GET /user-accounts*)(string email) -> (accounts[])

/transaction

  (POST /**)(string accountId, number amount, boolean isInbound)-> (string transactionId)

  (PUT /**)(string transactionId, boolean isInbound?, number amount?) -> (mensagem de confirmação da atualização)

  (DELETE /**)(string transactionId) -> (mensagem de confirmação da atualização)

  (GET /my-transactions*)(string clientId) -> (transactions[])

  (POST /status**)(string transactionId) -> (mensagem de confirmação da atualização)
