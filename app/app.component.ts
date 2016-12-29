import { Component } from '@angular/core';
import {MenuComponent} from './menu.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><my-menu></my-menu>`,
  entryComponents: [MenuComponent]     // Directives are deprecated
})
export class AppComponent  { name = 'Angular'; }
