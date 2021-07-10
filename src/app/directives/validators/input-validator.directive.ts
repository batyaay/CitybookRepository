import { ConstsValidator } from './ConstsValidator';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Attribute, Directive, forwardRef, Input } from '@angular/core';
import {formatDate} from '@angular/common';

@Directive({
  selector: '[cbInputValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputValidatorDirective),
      multi: true
    }
  ]
})
export class InputValidatorDirective implements Validator {

  constructor(
  @Attribute('cbInputValidator') public typeInput: string) { }

  validate(currentControl: AbstractControl): { [key: string]: any } {
    const currentValue = currentControl.value;
    let returnValue: any = false;
    switch (this.typeInput) {

      case 'idnumber':
        returnValue = !this.isIDNumberValid(currentValue) ? { b_error: true } : false;
        break;
      case 'tenNumbersOnly':
        returnValue = !this.tenNumbersOnly(currentValue) ? { b_error: true } : false;
        break;
      case 'ValidBirthdate':
        returnValue = !this.isBirthdateValid(currentValue) ? { b_error: true } : false;
        break;

      default:
        const regex = new RegExp(ConstsValidator.PATTERN[this.typeInput]);
        const isValidInput = regex.test(currentValue);       
        returnValue = (isValidInput || !currentValue) ? false : { b_error: true };
        break;

    }

    return returnValue ? returnValue : null;
  }

  isIDNumberValid(value: string) {
    let _isIDValid = true;
    if (value) {
      if (value.length > 0) {
        _isIDValid = (value.length === 9);
        if (_isIDValid) {
          const _tempValue: string = JSON.parse(JSON.stringify(value));
          let mone = 0;
          for (let i = 0; i < 9; i++) {
            let incNum = (parseInt(_tempValue[i]) || 0) * ((i % 2) + 1);
            if (incNum > 9) {
              incNum -= 9;
            }
            mone += incNum;
          }
          if(mone == 0){
              return false;
          }
          _isIDValid = (mone % 10 === 0) ? true : false;
        }
      }

    }
    return _isIDValid;
  }

  tenNumbersOnly(value: string) {
    let _isPhoneValid = false;
    if (value) {
      // console.log(value);
      if (value.length > 0) {
        _isPhoneValid = value.length === 10;
      }

    }
    return _isPhoneValid;
  }

  isBirthdateValid(value: Date) {
    let _isDateValid = true;
    let currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');    
    
    if (value) {
      let formatValue = formatDate(value, 'yyyy-MM-dd', 'en');
      if (formatValue > currentDate) {
        _isDateValid = false;
      }

    }
    return _isDateValid;
  }

}
