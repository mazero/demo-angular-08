import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testor',
  templateUrl: './testor.component.html',
  styleUrls: ['./testor.component.scss']
})
export class TestorComponent implements OnInit {
  public title2: string = 'Testor';

  constructor() { }

  ngOnInit(): void {
  }

}
