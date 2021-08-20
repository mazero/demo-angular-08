import { Joke } from './../classes/joke';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input('joke') public data: Joke;

  constructor() { }

  ngOnInit(): void {
  }

}
