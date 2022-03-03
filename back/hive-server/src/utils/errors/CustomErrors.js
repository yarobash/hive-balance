export class CustomError400 extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}
