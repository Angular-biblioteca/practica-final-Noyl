import { Component, OnInit } from '@angular/core';
import { IfrToastService } from 'projects/ifr-library/src/public-api';

@Component({
  selector: 'showcase-ifr-toast',
  templateUrl: './showcase-ifr-toast.component.html',
  styleUrls: ['./showcase-ifr-toast.component.scss'],
})
export class ShowcaseIfrToastComponent implements OnInit {
  constructor(private ifrToast: IfrToastService) {}

  ngOnInit() {}

  addInfo() {
    this.ifrToast.addInfoMessage('info', 'mensaje info')
  }

  addError() {

    this.ifrToast.addErrorMessage('error', 'mensaje error')
  }

  addWarning() {
    this.ifrToast.addWarningMessage('warning', 'mensaje warning')
  }

  addSuccess() {
    this.ifrToast.addSuccessMessage('success', 'mensaje success')
  }
}
