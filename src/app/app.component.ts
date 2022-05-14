import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBaseLearning';

  inputType='date';
  _style='background-color:blue'
  Mesaj():void{
    alert("button click event çalıştırıldı")
  }
  ChangeEvent(value:any):void{
    alert(value.target.value)
  }
}
