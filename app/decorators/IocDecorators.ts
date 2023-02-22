
import "reflect-metadata";
import { Container } from '../IoCContainer/container.js'

export function Injectable() {
    return function (target: Function) {

        let original = target;
        let tt: any[] = Reflect.getMetadata('design:paramtypes', target);
        let servicesToInject: Array<any> = [];
        console.log('teste')
        Container.typesRegistered.set(original.name, target);
    }
}

export class Injector {
    static Resolve<E>(service: Function): E {

        console.log('Quantidade', Container.typesRegistered)
        let parameters: any[] = Reflect.getMetadata('design:paramtypes', service);
        console.log(Reflect.getMetadataKeys(service))
         
        if(parameters){
            console.log('Com parametros')
            let parametersToInject:any[] = [];
            for (const parameter of parameters) {
                parametersToInject.push(this.Resolve<any>(Container.typesRegistered.get(parameter.name)))
            }
            return service.apply(Object.create(service.prototype), parametersToInject)
        }else{
            console.log('Sem parametros')
            return  Reflect.construct(service, [])
        }
    }
}

