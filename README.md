# Node Typescript Basic Starter

This is a basic example to test Node with Typescript.

## Requeriments

Need Docker and Compose installed in your host.

## How to start

Build containers

```bash
docker compose build
```

Instance containers

```bash
docker compose up -d
```

You can stop containers with

```bash
docker compose down
```

To view logs

```bash
docker compose logs -ft
```

To run comand prompt into container.

```bash
docker exec -it node-service sh
```

To execute command from host, for example.

```bash
docker exec -it node-service npm install
```

## How was building

To create this project. 

1. verfy typescript version. 
2. init typescript config file.
3. init project depencies.
4. install all dependencies we need.

```bash
docker exec -it node-service tsc --version
docker exec -it node-service tsc --init
docker exec -it node-service npm init
docker exec -it node-service npm install typescript --save
docker exec -it node-service npm install express --save
docker exec -it node-service npm install nodemon --save
docker exec -it node-service npm install ts-node --save
docker exec -it node-service npm install dotenv --save
docker exec -it node-service npm install @types/node --save
docker exec -it node-service npm install @types/express --save
docker exec -it node-service npm install @types/dotenv --save
```

Build app to deploy

```bash
docker exec -it node-service npm run build
```