import { Component } from '@angular/core';
import { Categorie } from '../../model/categorie';
import { CategorieServiceService } from '../../service/categorie-service.service';
import { Article } from '../../model/article';
import { ArticleServiceService } from '../../service/article-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {
  categorie:Categorie;
  
  articles: Article[];
  isLoaded=false;

  constructor(private categorieService: CategorieServiceService, private articleService:ArticleServiceService,private activatedRouter:ActivatedRoute) { }
 
  
  ngOnInit(): void {
    const categorieId = this.activatedRouter.snapshot.params['id'];
    this.cargarCategorie(categorieId).subscribe(
      data => {
        this.categorie = data;
        this.isLoaded=true;
      },
      error => {
        console.error('Error loading article:', error);
      }
    );
    this.cargarMiniaturas(categorieId).subscribe(
      data => {
        this.articles = data;
        // Puedes agregar lógica adicional aquí si es necesario
      },
      error => {
        console.error('Error al cargar miniaturas:', error);
      }
    );
  }
  
  cargarCategorie(id: string): Observable<Categorie> {
    return this.categorieService.getCategorie(id);
  }

  cargarMiniaturas(id: string): Observable<Article[]> {
    return this.articleService.byCategorie(id).pipe(
      map(data => {
        // Obtener los últimos 4 artículos
        const articles = data;
        console.log("in loop")
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
