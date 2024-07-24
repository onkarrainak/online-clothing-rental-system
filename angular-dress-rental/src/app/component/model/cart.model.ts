import { Product } from "./product.model";



export interface Cart{
    cartId : number;
    mrpPrice : number;
    quantity : number;
    size?:any;
    duration?: any;
    user : any;
    product: Product
    
}