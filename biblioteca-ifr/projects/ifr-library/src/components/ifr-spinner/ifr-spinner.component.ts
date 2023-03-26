import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IfrSpinnerService } from './services/ifr-spinner.service';

@Component({
  selector: 'ifr-spinner',
  templateUrl: './ifr-spinner.component.html',
  styleUrls: ['./ifr-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IfrSpinnerComponent implements OnInit {
  @Input() embedded: boolean = false;
  @Input() pathImg: string = 'resources/img/spinner.gif';

  constructor(public ifrSpinner: IfrSpinnerService) {}

  ngOnInit() {}
}
