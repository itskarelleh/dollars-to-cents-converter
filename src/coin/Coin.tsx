interface CoinInterface {
    type: string,
    value: number,
    quantity: number,
    getValue(): number,
    getType(): string,
    getQuantity(): number,
    setQuantity(val:number): void;
}

class Coin implements CoinInterface {
    type: string;
    value: number;
    quantity: number;

    constructor(type:string, value:number, quantity: number) {
        this.type = type;
        this.value = value;
        this.quantity = quantity;
        this.setQuantity(quantity);
    }

    getType() {
        return this.type;
    }

    getValue() {
        return this.value;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }
}

export { Coin }
