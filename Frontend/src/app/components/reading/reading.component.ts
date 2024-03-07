import { Component} from '@angular/core';
import { ArticleServiceService } from '../../service/article-service.service';
import { TokenService } from '../../service/token.service'; 
import { Article } from '../../model/article';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {
  article: Article;
  artNoMod: Article;

  constructor( private articleService:ArticleServiceService, private tokenService: TokenService, private activatedRouter: ActivatedRoute){

  }
 
  isLogged = false;



  ngOnInit(): void{
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }  
    else{
      this.isLogged = false;
    }  
    // Obtener el ID del artículo de la URL
    this.activatedRouter.params.subscribe(params => {
      const articleId = params['id'];
      if (articleId) {
        this.cargarArticle(articleId);
      }
    });
  }
  
  cargarArticle(id:number):void {
    this.articleService.find(id).subscribe(
      data => {
        const artNoMod = data;
        const imgElements = artNoMod.html;
        const modifiedHtml = imgElements.split('<img').join('<img class="img-fluid"');
        artNoMod.html = modifiedHtml;
        this.article = artNoMod;
      },
      error => {
        console.error('Error loading article:', error);
      }
    )
  }
 
  delete(id?:number){
    if(id != undefined){
      this.articleService.delete(id).subscribe(
        data=> {
          this.cargarArticle(id);
          window.location.href = '/';    
        }, err =>{
          alert("The article cannot be deleted");
        }
      )
    }
  }
}