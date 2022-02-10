import { BookDetails } from "./book-details";

export class CartResponse {
    public books: BookDetails[] = [];
    public Quantity:number | undefined;
}
