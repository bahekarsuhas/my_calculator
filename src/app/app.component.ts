import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-calculator';

  wholeCalculationStrArray = [];
  wholeCalculationStr = '';
  isOperatorEntered = false;
  currentOperatingNumber = '';
  finalCalculation = 0;

  operatorMap = {
    MODULUS: '%',
    ADDITION: '+',
    SUBTRACT: '-',
    DIVISION: '/',
    MULTIPLY: 'X'
  };


  operation(operation: string) {

    console.log('operation : ' + operation);
    console.log('isOperatorEntered : ' + this.isOperatorEntered);

    if (operation === 'CLEAR') {
      this.resetCal();
      return;
    }

    if (!this.isOperatorEntered) {
      console.log('onOperation : ' + this.wholeCalculationStrArray);

      if (this.currentOperatingNumber !== '') {
        this.wholeCalculationStrArray.push(this.currentOperatingNumber);
        this.wholeCalculationStrArray.push(operation);
        this.updateCalculationStr(this.operatorMap[operation], true);
        this.isOperatorEntered = true;
      } else {
        this.wholeCalculationStrArray.push(operation);
        this.updateCalculationStr(this.operatorMap[operation], true);
        this.isOperatorEntered = true;
      }
      console.log('last entry : ' + this.wholeCalculationStrArray[this.wholeCalculationStrArray.length - 1]);
    } else {
      console.log('isOperatorEntered once it is true : ' + this.isOperatorEntered);
      this.wholeCalculationStrArray.push(this.currentOperatingNumber);
      const calculatedValue = this.calculate(this.wholeCalculationStrArray);
      console.log('calculated Value : ' + calculatedValue);
      this.finalCalculation = calculatedValue;
      this.wholeCalculationStrArray = [];
      this.wholeCalculationStrArray.push('' + calculatedValue);
      this.updateCalculationStr('' + calculatedValue, false);
      if (operation && operation !== 'EQUALS') {
        this.wholeCalculationStrArray.push(operation);
        this.wholeCalculationStr = '' + this.finalCalculation;
        this.updateCalculationStr(this.operatorMap[operation], true);
      } else {
        this.isOperatorEntered = false;
        this.wholeCalculationStr = '' + this.finalCalculation;
      }
      console.log('onOperation after calculation : ' + this.wholeCalculationStrArray);
      console.log('onOperation after calculation String : ' + this.wholeCalculationStr);
    }
    this.currentOperatingNumber = '';
    console.log(this.wholeCalculationStrArray);
    console.log(this.wholeCalculationStr);

  }

  updateCalculationStr(incomingStr: string, isOperator: boolean) {
    console.log('incoming str : ' + incomingStr);

    if (isOperator) {
      this.wholeCalculationStr = this.wholeCalculationStr + ' ' + incomingStr + ' ';
    } else {
      this.wholeCalculationStr = this.wholeCalculationStr + incomingStr;
    }
    console.log('After calculation string updation : ' + this.wholeCalculationStr);
  }

  calculate(numOpArray: any[]) {

    let operation = numOpArray[1];

    console.log('First Number : ' + parseFloat(numOpArray[0]));
    console.log('second Number : ' + parseFloat(numOpArray[2]));
    switch (operation) {
      case 'DIVISION':
        return parseFloat(numOpArray[0]) / parseFloat(numOpArray[2]);

      case 'MULTIPLY':
        return parseFloat(numOpArray[0]) * parseFloat(numOpArray[2]);

      case 'ADDITION':
        return parseFloat(numOpArray[0]) + parseFloat(numOpArray[2]);

      case 'SUBTRACT':
        return parseFloat(numOpArray[0]) - parseFloat(numOpArray[2]);

      case 'MODULUS':
        return parseFloat(numOpArray[0]) % parseFloat(numOpArray[2]);

    }

  }

  // tslint:disable-next-line:typedef
  operatingNumber(selectedNumber: string) {
    console.log('Current Operating number : ' + this.currentOperatingNumber);
    console.log('selectedNumber : ' + selectedNumber);
    if (selectedNumber === '.'){
      if (this.currentOperatingNumber.split('.').length > 1) {
        return;
      } else if (this.currentOperatingNumber === ''){
        console.log('appending 0 ');
        selectedNumber = '0'.concat(selectedNumber);
        this.currentOperatingNumber = '0';
      }
  }

    this.currentOperatingNumber = this.currentOperatingNumber.concat(selectedNumber);
    this.updateCalculationStr(selectedNumber, false);
  }

// tslint:disable-next-line:typedef
resetCal(){
  this.wholeCalculationStrArray = [];
  this.wholeCalculationStr = '';
  this.finalCalculation = 0;
  this.isOperatorEntered = false;
  this.currentOperatingNumber = '';
}
}


