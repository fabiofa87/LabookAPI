# LabookAPI



#Ideia:

Objetivo da API é fazer uso de um banco de dados relacional(MySQL).
Nessa API encontramos 2 tabelas: User e Posts.

#User

## Método: (POST) User - Signup
`
/user/signup
` 

Deverá ser fornecido:

- name
- email
- password

Deverá retornar:

- Feedback
- Token(Validade de 12h)


## Método: (POST) User - Login

`
/user/login
`

Deverá ser fornecido:

- name
- password

# Header

Authorization: token

Deverá retornar:

- Feedback
- Token

## Metodo Post New User (POST)

`
/posts
`
Deverá ser fornecido:

- photo
- description
- type * normal/event *


## Header

Authorization: token

Deverá retornar:

- Feedback

## Metodo Get Post By Id (GET)

Deverá ser fornecido:

- Id do post

`
/post/:id
`

Deverá retornar:

- Feedback
- Photo
- Description
- Type
- CreationDate

# Libraries utilizadas no projeto:

- Json Web Token
- BcryptJS
- uuid
- Dotenv
- Knex


# Linguagem

- Typescript
- ExpressJS

##
Qualquer sugestão será muito bem vinda. Esse é meu primeiro projeto efetivo de backend e estou muito feliz por tê-lo conseguido.
