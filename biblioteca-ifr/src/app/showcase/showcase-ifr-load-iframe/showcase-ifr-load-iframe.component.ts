import { Component, OnInit } from '@angular/core';
import { IfrSpinnerService } from 'projects/ifr-library/src/public-api';

@Component({
  selector: 'showcase-ifr-load-iframe',
  templateUrl: './showcase-ifr-load-iframe.component.html',
  styleUrls: ['./showcase-ifr-load-iframe.component.scss'],
})
export class ShowcaseIfrLoadIframeComponent implements OnInit {
  constructor(private ifrSpinner: IfrSpinnerService) {
    this.ifrSpinner.showSpinner();
  }

  ngOnInit() {}

  load() {
    console.log('Iframe cargado');
    this.ifrSpinner.hideSpinner();
  }
}
