import { Injectable } from "../decorators/IocDecorators.js";
import { ServiceTeste } from "./service-teste.js";

@Injectable()
export class ServiceTeste2 {


    constructor(public serviceTeste: ServiceTeste) {

    }

    imprimir() {
        this.serviceTeste.execFunc();
    }

}