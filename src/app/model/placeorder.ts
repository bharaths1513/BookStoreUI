

export class Placeorder {
    // books: BookDetails = new BookDetails;
    orderid!:number;
	
	price!:number;
	quantity!:number;
    address!:string;

    constructor(price:number,quantity:number,address:string){
        this.price=price;
        this.quantity=quantity;
        this.address=address;
    }
	 
}
