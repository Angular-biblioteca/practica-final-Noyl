import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-clickoutside',
  templateUrl: './showcase-clickoutside.component.html',
  styleUrls: ['./showcase-clickoutside.component.css'],
})
export class ShowcaseClickoutsideComponent implements OnInit {
  public mode: string;

  constructor() {
    this.mode = 'standard';
  }

  ngOnInit() {}

  openStandard() {
    this.mode = 'standard';
  }

  openDelay() {
    this.mode = 'delay';
  }

  openInactive() {
    this.mode = 'inactive';
  }

  clickOutside(event: unknown) {
    console.log(event);
  }
}
