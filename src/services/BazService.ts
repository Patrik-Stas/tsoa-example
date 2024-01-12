import {generateRandomIdentifier} from "./utils";


export class BazService {
    #instanceId

    constructor(config: object) {
        this.#instanceId = generateRandomIdentifier()
        console.log(`Built BazService ${this.#instanceId}`)
    }

    public async getBaz() {
        console.log(`Baz instance ${this.#instanceId} getting the Baz`)
    }
}