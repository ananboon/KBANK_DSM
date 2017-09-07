import { Injectable } from '@angular/core';

@Injectable()
export class CoordinateCalculatorService {

  constructor() { }

  get_x_coordinate(x_From:number,width_From:number,width_To):number{
  	let x_To = Math.round( (x_From / width_From) * width_To );
  	return x_To;
  }

  get_y_coordinate(y_From:number,height_From:number,height_To:number){
  	let y_To = Math.round( (y_From / height_From) * height_To );
  	return y_To;
  }

  get_offSetTop(offSetTop_From:number,Documentheight_From:number,Documentheight_To:number):number{
  	let offSetTop_To = Math.round( (offSetTop_From / Documentheight_From) * Documentheight_To );
  	return offSetTop_To;
  }
  ///aaaa
}
