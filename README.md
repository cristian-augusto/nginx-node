# nginx-node

Desafio desenvolvido como parte do treinamento Full Cycle, referente ao módulo Docker. O objetivo é
desenvolver uma pequena aplicação Node/JS que ao receber uma requisição gera um nome aleatório, insere em uma
base MYSQL e retorna todos os registros. O endpoint será consumido pelo Nginx que servirá como proxy reverso.

#### Como executar a aplicação?

Para subir a aplicação via Docker basta executar o comando abaixo e acessar **http://localhost**

```
docker-compose up -d
```
