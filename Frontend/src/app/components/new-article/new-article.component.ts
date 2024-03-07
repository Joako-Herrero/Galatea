import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../../service/article-service.service';
import { Router } from '@angular/router';
import { Article } from '../../model/article';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css'
})
export class NewArticleComponent implements OnInit{
  isLogged=false;
  title: string;
  date:Date;
  banner:string;
  miniTitle:string;
  miniature:string; 
  sinopsis:string; 
  categorie:string; 
  html:string; 

  constructor(private articleService:ArticleServiceService, private router: Router,  private tokenService: TokenService){}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
      window.location.href = '/';
    }
    
  }
 
  onCreate():void{
   
    const newArticle= new Article(this.title, this.date, this.banner, this.miniTitle, this.miniature, this.sinopsis, this.categorie, this.html);
    this.articleService.save(newArticle).subscribe(
      data=>{
        alert("Article Created Sucesfully");
        window.location.href = '/';
    },
    error => {
      console.error('Error Creating article:', error);
    })
  }
  
  content: string = '';
  
  summernoteOptions: any = {
    placeholder: '',
    tabsize: 2,
    height: 400,
    minHeight: null,
    maxHeight: null,
    focus: true,
    uploadImagePath: '',
    toolbar: [
      ['misc', [ 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', [ 'strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']],
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times'],
    
  };
 
 
  onSummernoteInit() {
    console.log('ngx-summernote inicializado');
  }
}
