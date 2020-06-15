import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }

  onChangeUseSymbols (){
    this.includeSymbols = !this.includeSymbols
  }
  onChangeUseNumbers (){
    this.includeNumbers = !this.includeNumbers
  }
  // constructor (){
  //   this.password = '';
  // }
  
 onButtonClick(){
   console.log(this.includeLetters)
   console.log(this.includeSymbols)
   console.log(this.includeNumbers)

   this.password = 'My Password'
 }
}
