import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = []
  private Server_url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getSingleOrder(orderId : number){
    return this.http.get<ProductResponseModel[]>(this.Server_url+'/orders/'+orderId).toPromise();
  }

}

interface ProductResponseModel{
  id: number,
  title: string,
  description: string,
  price: number,
  qunatityOrdered: number,
  image: string
}