import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IfrToastService } from '../../public-api';
import { IfrToast } from './bean/ifr-toast';

@Component({
  selector: 'ifr-toast',
  templateUrl: './ifr-toast.component.html',
  styleUrls: ['./ifr-toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(5%)',
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ]),
  ],
})
export class IfrToastComponent implements OnInit {
  @Input() timeout: number = 0;

  constructor(public toastService: IfrToastService) {}

  ngOnInit() {
    if (this.timeout) {
      this.toastService.timeout = this.timeout;
    }
  }

  closeToast(toast: IfrToast) {
    this.toastService.closeToast(toast);
  }
}
