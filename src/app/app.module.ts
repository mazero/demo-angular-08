import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestorComponent } from './testor/testor.component';
import { MovementDirective } from './directives/movement.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';
import { GetCharPipe } from './pipes/get-char.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestorComponent,
    MovementDirective,
    ToggleDirective,
    SizerComponent,
    GetCharPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GetCharPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
