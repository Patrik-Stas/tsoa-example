// src/controllers/FooController.ts

import {Controller, Get, Route} from 'tsoa';
import { injectable } from 'tsyringe';
import {FooService} from "../services/FooService";
import {BarService} from "../services/BarService";
import {BazService} from "../services/BazService";

@injectable()
@Route('resources')
export class ResourceController extends Controller {
    #fooService
    #barService
    #bazService

    constructor(private fooService: FooService, private barService: BarService, private bazService: BazService) {
        super();
        this.#fooService = fooService
        this.#barService = barService
        this.#bazService = bazService
    }

    @Get('/')
    public async getFoo(): Promise<void> {
        await this.#fooService.getFoo()
        await this.#barService.getBar()
        await this.#bazService.getBaz()
        return
    }
}