import { Injectable } from '@angular/core';
import { IfrToastConstants } from '../constants/ifr-constants';

@Injectable({
  providedIn: 'root'
})
export class IfrConstantsService {

  IfrToastConstants = IfrToastConstants;

constructor() {
 }

}
