import { GetCharPipe } from './../pipes/get-char.pipe';
import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  @Input() public size!: number | string;
  @Output() public sizeChange: EventEmitter<number> = new EventEmitter<number>();

  public hello: string = '';

  constructor(private getChar: GetCharPipe) { 
  }

  ngOnInit(): void {
    console.log('size', this.size)
    this.hello = this.getChar.transform('World', 3);
  }

  public dec(): void {
    this.resize(-1);
  }

  public inc(): void {
    this.resize(+1)
  }

  public resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
