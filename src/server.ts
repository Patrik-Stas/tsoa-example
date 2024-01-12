// src/server.ts
import "reflect-metadata";
import {container} from "tsyringe";
import {app} from "./app";
import {BazService} from "./users/BazService";

// BazService is used by FooController, but for some reason we want to build up the instance manually, rarther than
// utilizing tsyringe annotations
const bazService = new BazService({ baz_url: "http://baz.localhost:1234" })
container.registerInstance(BazService, bazService);

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

