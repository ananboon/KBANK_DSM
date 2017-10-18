export class MessageModel {
  public clientId: string;
  public component: string;
  public message;
  public isFromDevice: boolean;
  public slideIndex : number;

  public coordinate_x: number;
  public coordinate_y: number;
  public offsetTop:number;
  public iframeWidth:number;
  public iframeHeight:number;
  public documentHeight:number;

  public fund_fact_sheet_url:string;

  constructor(){}
}
