# TypeDI and TypeORM proof of concept

Requirements

* NodeJS 14.17+
* Postgres 11+ or Docker

How to run

* Change the `ormconfig.js` to your local configuration
  * Or use the docker-compose to create it for you (`docker-compose up -d`)
* Run the following commands

```
npm install
npm run db:update
npm run dev
```

Reference

* [typescript](https://github.com/microsoft/TypeScript)
* [typestack/typedi](https://github.com/typestack/typedi)
* [typeorm](https://github.com/typeorm/typeorm)
* [typeorm-typedi-extensions](https://github.com/typeorm/typeorm-typedi-extensions)
* [ts-node-dev](https://github.com/wclr/ts-node-dev)
