import consola from "consola";

export enum MessageVariant {
  Success = 'success',
  Info = 'info',
  Error = 'error'
}

export class Message {

  private content: string;

  constructor(content: string){
    this.content = content;
  }

  public show() {
    console.log(this.content);
  }

  public capitalize() {
    this.content = this.content[0].toUpperCase() + this.content.substring(1);
  }

  public toUpperCase() {
    this.content = this.content.toUpperCase();
  }

  public toLowerCase() {
    this.content = this.content.toLocaleLowerCase();
  }

  static showColorized(variant:  MessageVariant, text: string) {
   
    switch(variant) {
      case  MessageVariant.Success:
        consola.success(text);
        break;
      case MessageVariant.Info: 
        consola.info(text);
        break;
      case MessageVariant.Error:
        consola.error(text);
        break;
      default:
        consola.error('No text');
    }
  }
}