import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { Cartmodel } from 'src/app/model/cartmodel';
import { Placeorder } from 'src/app/model/placeorder';
import { CartService } from 'src/app/service/cart.service';
import { PlaceorderService } from 'src/app/service/placeorder.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 
  cartModel : Cartmodel = new Cartmodel();
  cartList :any;
  cartvalue:number | undefined;
  

  edituseraddressform!: FormGroup;
  item_qty = 1;
  step = 0;
  constructor( private formBuilder: FormBuilder,private router: Router,private cartService: CartService, private placeorderservice:PlaceorderService) { }

  ngOnInit(): void {
    this.edituseraddressform = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

      service: ['advance']
    });
    this.getProductOfCart();
  }
  onhome(){
    this.router.navigateByUrl('/homePage')
  }
  onplaceorder(BookId:number,orderdata:Placeorder,bookPrice:number,bookQuantity:number){
    bookPrice= bookPrice*bookQuantity;
    orderdata=new Placeorder(bookPrice,bookQuantity,JSON.stringify(this.edituseraddressform.value))
    this.placeorderservice.placeorder(BookId,orderdata).subscribe(data => {
      console.log(data);
      console.log(data.orderId);
      

      this.router.navigate(["placeOrder/orderid"])
    })
    
    
  }

  getProductOfCart(){
    this.cartService.getCart().subscribe(
      data=>{
         console.log(data), this.cartList= data
        
        

        },
      error=> { console.log(error)}
    );
  }

}
