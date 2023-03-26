import { Injectable } from '@angular/core';
import { IfrConstantsService } from 'projects/ifr-library/src/public-api';
import { IfrToast } from '../bean/ifr-toast';

@Injectable({
  providedIn: 'root',
})
export class IfrToastService {
  private _toasts: IfrToast[];

  private _timeout: number;

  public get toasts(): IfrToast[] {
    return this._toasts;
  }

  public get timeout(): number {
    return this._timeout;
  }

  public set timeout(value: number) {
    this._timeout = value;
  }

  constructor(private constants: IfrConstantsService) {
    this._toasts = [];
    this._timeout = this.constants.IfrToastConstants.TIMEOUT;
  }

  addInfoMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.IfrToastConstants.TYPE_INFO);
  }

  addWarningMessage(title: string, message: string) {
    this.addMessage(
      title,
      message,
      this.constants.IfrToastConstants.TYPE_WARNING
    );
  }

  addErrorMessage(title: string, message: string) {
    this.addMessage(
      title,
      message,
      this.constants.IfrToastConstants.TYPE_ERROR
    );
  }

  addSuccessMessage(title: string, message: string) {
    this.addMessage(
      title,
      message,
      this.constants.IfrToastConstants.TYPE_SUCCESS
    );
  }

  closeToast(toast: IfrToast) {
    let index: number = this._toasts.findIndex((t) => t === toast);
    if (index !== -1) {
      this._toasts.splice(index, 1);
    }
  }
  
  private addMessage(title: string, message: string, type: string) {
    let toast: IfrToast = new IfrToast(title, message, type);
    this._toasts.push(toast);
    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeout);
  }

}
