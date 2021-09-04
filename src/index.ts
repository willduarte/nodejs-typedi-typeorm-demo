import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import { UserProfileService } from "./services/UserProfileService";

useContainer(Container);

createConnection()
  .then(() => {
    console.log("successfuly connected!");

    const service = Container.get(UserProfileService);

    // service.create({ name: "John Doe" }).then(console.log).catch(console.error);

    service.findOne().then(console.log).catch(console.error);
  })
  .catch((error) => {
    console.error(`Couldn't connect to the database!`, error);
  });
