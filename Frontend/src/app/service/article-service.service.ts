import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  URL='https://galatea-backend.onrender.com/articulo/';
  
  constructor(private httpClient: HttpClient) {

  }

  public list():Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.URL + 'list');
  }

  public byCategorie(categorie: string):Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.URL + `categoria/${categorie}`);
  }

  public find(id: number):Observable<Article>{
    return this.httpClient.get<Article>(this.URL + `find/${id}`);
  }

  public detail(id: number): Observable<Article>{
    return this.httpClient.get<Article>(this.URL + `detail/${id}`);
  }

  public save(article: Article): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', article);
  }

  public update(id: number, article: Article):Observable<any>{
    return this.httpClient.put<any>( this.URL + `edit/${id}`, article);
  }

  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
