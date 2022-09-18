import { Coin } from "./Coin";

function convertToCents (value:string) {

    var table = [
      new Coin("quarter", 25, 0),
      new Coin("dime", 10, 0),
      new Coin("nickel", 5, 0),
      new Coin("penny", 1, 0)
    ];
  
    var dollarValue = Number.parseFloat(value) * 100;
  
    if(dollarValue <= 4) {
      table[3].quantity = dollarValue;
      return table;
    }
  
      return table;
  }

export  { convertToCents }