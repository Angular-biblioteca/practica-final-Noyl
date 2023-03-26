import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { IfrSelectItem } from '../../public-api';

@Component({
  selector: 'ifr-dropdown',
  templateUrl: './ifr-dropdown.component.html',
  styleUrls: ['./ifr-dropdown.component.scss'],
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
      transition('void => visible', animate('195ms ease-in')),
    ]),
  ],
})
export class IfrDropdownComponent implements OnInit {
  @Input() options: IfrSelectItem[] = [];
  @Input() valueSelect: any;
  @Input() labelNoResults: string = 'No results';

  @Output() select: EventEmitter<IfrSelectItem>;

  @ContentChild(TemplateRef, { static: false })
  template: TemplateRef<any> | null = null;

  public showItems: boolean;
  public optionsShow: IfrSelectItem[];
  public valueShow: string | null;

  constructor() {
    this.optionsShow = [];
    this.showItems = false;
    this.valueShow = null;
    this.select = new EventEmitter();
  }

  ngOnInit() {
    if (this.valueSelect) {
      this.preload();
    }
    this.optionsShow = this.options.slice(0);
  }

  preload() {
    let optionFound = this.options.find(
      (option) => option.value === this.valueSelect
    );
    if (optionFound) {
      this.valueShow = optionFound.label;
      this.selectItem(optionFound);
    }
  }

  showPanelOptions() {
    this.showItems = !this.showItems;
  }

  filter(query: string) {
    this.optionsShow = this.options.filter((option) =>
      option.label.toLowerCase().includes(query?.toLowerCase())
    );
  }

  selectItem(item: IfrSelectItem) {
    this.showItems = false;
    this.valueShow = item.label;
    this.select.emit(item);
  }

  hidePanelItems() {
    this.showItems = false;
  }
}
