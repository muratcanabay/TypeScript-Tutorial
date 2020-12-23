import StringValidator from "./StringValidator";


export default class ZipCodeValidator implements StringValidator {
  static numberRegex = /^[0-9]+$/;
  isAcceptable(s: string): boolean {
    return s.length === 5 && ZipCodeValidator.numberRegex.test(s);
  }
}