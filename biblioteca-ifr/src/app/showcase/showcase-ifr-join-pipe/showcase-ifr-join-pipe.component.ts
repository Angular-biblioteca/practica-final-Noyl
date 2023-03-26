import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ifr-join-pipe',
  templateUrl: './showcase-ifr-join-pipe.component.html',
  styleUrls: ['./showcase-ifr-join-pipe.component.css'],
})
export class ShowcaseIfrJoinPipeComponent implements OnInit {
  valoresNulo = null;
  valores: string[];

  constructor() {
    this.valores = ['1', '2', '3', '4', '5'];
  }

  ngOnInit() {}
}
