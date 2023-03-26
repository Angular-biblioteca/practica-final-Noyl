export class IfrToast {
  title: string | undefined;
  message: string | undefined;
  type: string | undefined;

  constructor(title?: string, message?: string, type?: string) {
    this.title = title;
    this.message = message;
    this.type = type;
  }
}
