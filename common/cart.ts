import { Address } from "../common/address";
import { Product } from "../common/product";

export class Cart {
    products: Array<[Product,number]>;
    value: number;
    empty: boolean;
    shipping: number;
    deliveryAddress: Address;


    constructor() {
        this.products = Array<[Product,number]> ();
        this.value = 0;
        this.empty = true;
        this.shipping = 0;
        this.deliveryAddress = new Address();
    }

    public getProducts(): Array<[Product,number]>{
        return this.products;
    }

    public addProduct(product: Product, qtd: number): void{
        this.products.push([product,qtd]);
        this.value += (qtd*product.getPrice());
        if (this.empty) {
            this.empty = false;
        }
    }

    public setAddress(address: Address): void{
        this.deliveryAddress = address;
    }

    public setShipping(shipping: number): void{
        this.shipping = shipping;
    }

    public getAddress(): Address{
        return this.deliveryAddress;
    }

}