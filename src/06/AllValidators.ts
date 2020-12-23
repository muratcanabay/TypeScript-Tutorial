import StringValidator from "./StringValidator";
export class AValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    throw new Error("Method not implemented.");
  }
}
export class BValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    throw new Error("Method not implemented.");
  }
}
