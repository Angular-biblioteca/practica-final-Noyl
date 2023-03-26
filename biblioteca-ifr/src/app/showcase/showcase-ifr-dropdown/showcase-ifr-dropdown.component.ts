import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IfrSelectItem } from 'projects/ifr-library/src/public-api';

@Component({
  selector: 'showcase-ifr-dropdown',
  templateUrl: './showcase-ifr-dropdown.component.html',
  styleUrls: ['./showcase-ifr-dropdown.component.css'],
})
export class ShowcaseIfrDropdownComponent implements OnInit {
  public options: IfrSelectItem[] = [];
  public valueSelect: any;

  constructor() {}

  ngOnInit() {
    this.options = [
      new IfrSelectItem('Label1', 'Value1'),
      new IfrSelectItem('Label2', 'Value2'),
      new IfrSelectItem('Label3', 'Value3'),
      new IfrSelectItem('Label4', 'Value4'),
    ];

    this.valueSelect = 'Value3';
  }

  select(itemSelected: IfrSelectItem) {}
}
