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

Check ts version

```bash
docker exec -it node-service tsc --version
```

Init tsconfig.json

```bash
docker exec -it node-service tsc --init
```

Init npm

```bash
docker exec -it node-service npm init
```

Install typescript

```bash
docker exec -it node-service npm install typescript --save
```

Install express

```bash
docker exec -it node-service npm install express --save
```

Install nodemon

```bash
docker exec -it node-service npm install nodemon --save
```

Install ts-node

```bash
docker exec -it node-service npm install ts-node --save
```

Install types for node

```bash
docker exec -it node-service npm install @types/node --save
```

Install types for express

```bash
docker exec -it node-service npm install @types/express --save
```
