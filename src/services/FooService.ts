import {injectable} from 'tsyringe';
import {generateRandomIdentifier} from "./utils";

@injectable()
export class FooService {
    #instanceId

    constructor() {
        this.#instanceId = generateRandomIdentifier()
        console.log(`Built FooService ${this.#instanceId}`)
    }

    public async getFoo() {
        console.log(`Foo instance ${this.#instanceId} getting the Foo`)
    }
}