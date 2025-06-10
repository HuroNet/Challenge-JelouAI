export class ErrorHandler {
  private errors: string[] = [];

  addError(error: string) {
    this.errors.push(error);
  }

  getErrors(): string[] {
    return this.errors;
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  clearErrors() {
    this.errors = [];
  }
}
