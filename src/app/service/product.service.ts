import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModelServer, serverResponse } from '../models/product.model';
import { CartModelServer } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) {}

  getAllProducts(limitOfResults = 10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.SERVER_URL + '/products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  //get single product from server
  getSingleProduct(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(
      this.SERVER_URL + '/products/' + id
    );
  }

  getProductFromCategory(catName: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(
      this.SERVER_URL + '/products/category/' + catName
    );
  }
}
