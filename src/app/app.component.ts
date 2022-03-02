import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modal')
  public modalTemplateRef!: TemplateRef<any>; // ( != can be value || null)
  public modalRef!: ModalRef;
  public firstName = 'Philip';

  constructor(private modalService: ModalService) {}
  public show(): void {
    this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Detail'
    });
  }
}
