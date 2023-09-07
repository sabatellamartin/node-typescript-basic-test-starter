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

First, Into node folder need only a empty index.js file.

Then, init the project creating the package.json

```bash
docker exec -it node-service npm init -y
```

Next, in index.js import a package. Observe this is the traditional way to do.

```javascript
const fs = require('fs');
```

If you change the import to ES format like that

```typescript
import fs from 'fs';
```

The code not run. Else need to add the next line below to "main": "index.js" in package.js file.

```json
"type":"module",
```

Whith this the codes work perfectly.

Then, install typescript.

```bash
docker exec -it node-service npm install typescript --save-dev
```

Next in package.json file add script can build with tsc.

Write the line in sustitution of "test": "echo \"Error: no test specified\" && exit 1"

```json
"build":"tsc"
```

Change the js extention in index file to ts and organize the code into src directory.

Install decorations

```bash
docker exec -it node-service npm i -D @types/node
```

Create tsconfig.json and add the next code

```json
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "target": "ES2020",
        "sourceMap": true,
        "outDir": "dist",
    },
    "include": ["src/**/*"],
}
```

install ts node

```bash
docker exec -it node-service npm install --save-dev ts-node
```
