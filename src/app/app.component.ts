import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto7';
  nombre:any="";
  edad:number=0;

}
