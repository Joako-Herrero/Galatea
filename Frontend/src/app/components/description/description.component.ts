import { Component } from '@angular/core';
import { Article } from '../../model/article';
import { ArticleServiceService } from '../../service/article-service.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  articles: Article[];
  activatedRouter: any;
  isLoaded=false;
  constructor(private articleService: ArticleServiceService){}

  ngOnInit(): void {
    this.cargarMiniaturas().subscribe(
      data => {
        this.articles = data;
        this.isLoaded=true;
      },
      error => {
        console.error('Error al cargar miniaturas:', error);
      
      }
    );
  }

  cargarMiniaturas(): Observable<Article[]> {
    return this.articleService.list().pipe(
      map(data => {
        // Obtener los últimos 4 artículos
        const articles = data;

        // Ordenar de forma descendente (más recientes primero)
        articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
       
        const sortArticles = articles.slice(0, 4);
       
  
        return sortArticles;
      }),
      catchError(error => {
        console.error('Error al obtener artículos:', error);
        return of([]); // Devolver un array vacío en caso de error
      })
    );
  }

}
