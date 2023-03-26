import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IfrSpinnerService {
  private _show: boolean;

  constructor() {
    this._show = false;
  }

  get show(): boolean {
    return this._show;
  }

  showSpinner() {
    this._show = true;
  }

  hideSpinner() {
    this._show = false;
  }
}
