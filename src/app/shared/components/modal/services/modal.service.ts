import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";

@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    // Is kind a wrapper about component, to use destroy if necessary
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log('open called');
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}



export class ModalRef {
    constructor(private componentRef: ComponentRef<ModalComponent>) {}
    public close(): void {
        console.log('close called');
        this.componentRef.destroy();
    }
}

