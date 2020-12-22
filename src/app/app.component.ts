import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-calculator';

  wholeCalculationStr: any [] = [];
  currentOperatingNumber = '';
  finalCalculation = 0;

  operation(operation: string) {
    console.log("onOperation : " + this.wholeCalculationStr);
    console.log("last entry : " + this.wholeCalculationStr[this.wholeCalculationStr.length - 1]);
    if (operation !== 'EQUALS'){
      if (this.currentOperatingNumber !== ''){
        this.wholeCalculationStr.push(this.currentOperatingNumber);
        this.wholeCalculationStr.push(operation);
      }
      this.currentOperatingNumber = '';
      console.log(this.wholeCalculationStr);
    }else {
      
    }
    
  }

  operatingNumber (selectedNumber: string){
       this.currentOperatingNumber = this.currentOperatingNumber.concat(selectedNumber);
  }
}


