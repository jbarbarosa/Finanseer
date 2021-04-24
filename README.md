# UPlanner
Construir uma API REST com a stack MERN

# Baixar & utilizar localmente
Crie um arquivo .env na raíz do projeto (fora de /src) com as variáveis PORT e MONGO_URI, e atribua a elas os valores desejados.

Por enquanto, a API utiliza apenas autenticação/autorização com JWT. Para usar esse método, crie uma outra variável em .env chamada "secret", e atribua a ela, preferencialmente, um hash. O programa o usará para gerar as assinaturas necessárias para os tokens.
