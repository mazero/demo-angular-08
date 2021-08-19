import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Angular Nomades';
  public user: User = new User(10, 'Camille', 'Pasche');
  public users: User[] = [
    new User(10, 'Camille', 'Pasche'),
		new User(11, 'Céline', 'Gatignon'),
		new User(12, 'Patrick', 'Pulver'),
		new User(13, 'Kevin', 'Mir')
  ];
  public tab: number[] = [-4, 1,2,3,4,5,10,11,12,13,14,15,16,17,30,40,50,60];
  public name: string = 'Robin';
  public color: string = 'blue';
  public fontSizePx: number = 16;

  public bookName: string = "ES6 Programming";
  public bookPicUrl: string = "https://picsum.photos/200";
  public isAvailable: boolean = false;

  public myDate: Date = new Date();
  public myObject: Object = {'a': 1, 'b': 2, 'c': 3};

  public data: string[] = [
    "Please don't truncate me!",
    "This will be truncated with the default pipe settings. It's cool though, that's supposed to happen!",
    "We're using optional parameters defined by the truncate pipe to show its flexibility!"
  ];

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {

  }

  public sayHello(): string {
    return 'Hello World !';
  }

  public displayBlue(): boolean {
    return this.color === 'blue' ? true : false;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
