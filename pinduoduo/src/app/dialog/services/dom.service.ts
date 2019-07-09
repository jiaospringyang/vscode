import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Inject,
  Type,
  Injector,
  EmbeddedViewRef,
  ComponentRef
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

export interface DialogPos {
    width: string;
    height: string;
    top: string;
    left: string;
}

export interface ChildConfig {
    inputs: object;
    outputs: object;
    dialogPos?: DialogPos;
}

@Injectable({
  providedIn: "root"
})
export class DomService {
    private childComponent: ComponentRef<any>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  public appendComponentTo(childConfig: ChildConfig, parentId: string, child: Type<any>) {
      this.childComponent = this.resolver.resolveComponentFactory(child).create(this.injector);
      this.attachConfig(childConfig);
      this.appRef.attachView(this.childComponent.hostView);
      const childDomElement = (this.childComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.getElementById(parentId).appendChild(childDomElement);
  }

  public attachConfig(childConfig: ChildConfig) {
      const inputs = childConfig.inputs;
      const outputs = childConfig.outputs;
      for (const key in inputs) {
          if (inputs.hasOwnProperty(key)) {
              const element = inputs[key];
              this.childComponent.instance[key] = element;
          }
      }

      for (const key in outputs) {
          if (outputs.hasOwnProperty(key)) {
              const element = outputs[key];
              this.childComponent.instance[key] = element;
          }
      }
  }

  public removeComponent() {
      this.appRef.detachView(this.childComponent.hostView);
  }
}
