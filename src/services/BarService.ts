import {singleton} from 'tsyringe';
import {generateRandomIdentifier} from "./utils";

// Note: because the constructor for this class has no arguments, tsyringe is able to build it out when needed,
//       despite this class having no tsyringe annotations.
export class BarConfiguration {
    #instanceId

    constructor() {
        this.#instanceId = generateRandomIdentifier()
        console.log(`Building BarService configuration ${this.#instanceId}`)
    }
}

@singleton()
export class BarService {
    #instanceId
    #config

    constructor(config: BarConfiguration) {
        this.#config = config
        this.#instanceId = generateRandomIdentifier()
        console.log(`Built BarService ${this.#instanceId} with`)
    }

    public async getBar() {
        console.log(`Bar instance ${this.#instanceId} getting the Bar`)
    }
}