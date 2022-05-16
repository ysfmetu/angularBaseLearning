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

  name:string='ysf';
  surname:string='metu';

  Mesaj():void{
    alert("button click event çalıştırıldı")
  }
  ChangeEvent(value:any):void{
    alert(value.target.value)
  }
  FullCombine():void{
    alert(this.name+' '+this.surname);
  }
}
