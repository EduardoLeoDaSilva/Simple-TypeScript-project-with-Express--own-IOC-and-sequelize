import { Injectable } from "../decorators/IocDecorators.js";

@Injectable()
export class ServiceTeste{

    execFunc(){
        console.log('caguei')
    }
}