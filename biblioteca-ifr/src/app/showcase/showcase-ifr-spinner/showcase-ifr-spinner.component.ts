import { Component, OnInit } from '@angular/core';
import { IfrSpinnerService } from 'projects/ifr-library/src/public-api';

@Component({
  selector: 'app-showcase-ifr-spinner',
  templateUrl: './showcase-ifr-spinner.component.html',
  styleUrls: ['./showcase-ifr-spinner.component.css'],
})
export class ShowcaseIfrSpinnerComponent implements OnInit {
  embedded: boolean;

  constructor(public ifrSpinner: IfrSpinnerService) {
    this.embedded = false;
  }

  ngOnInit() {}

  activarSpinner() {
    this.ifrSpinner.showSpinner();
    setTimeout(() => {
      this.ifrSpinner.hideSpinner();
    }, 500);
  }

  cambiarModo() {
    this.embedded = !this.embedded;
  }
}
