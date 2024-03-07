import { Component } from '@angular/core';
import { Article } from '../../model/article';
import { ArticleServiceService } from '../../service/article-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {
  article: Article = null;
  isLogged= false;
  
  constructor(private articleService: ArticleServiceService, private activatedRouter: ActivatedRoute, private router:Router,  private tokenService: TokenService){}

  ngOnInit():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.articleService.find(id).subscribe(
      data=>{
        this.article = data;
      }, error => {
        console.error('Error loading article:', error); 
      }
    )
  
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
      window.location.href = '/';
    }
    
    
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.article)
    this.articleService.update(id,this.article).subscribe(
      data=>{
        console.log("Article has been Updated Sucesfully")
        window.location.href = '/';    
      },error => {
        console.error('Error loading article:', error);
      })
  }


  content: string = '';

  summernoteOptions: any = {
    placeholder: '',
    tabsize: 2,
    height: 300,
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,
    
    uploadImagePath: '',
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
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
