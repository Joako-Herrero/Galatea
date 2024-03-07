import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';


@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {


  URL='https://galatea-backend.onrender.com/categorie';
  
  constructor(private httpClient: HttpClient) {

  }


  public getCategorie(categorie: string):Observable<Categorie>{
    return this.httpClient.get<Categorie>(this.URL + `/getCategorie/${categorie}`);
  }

}
