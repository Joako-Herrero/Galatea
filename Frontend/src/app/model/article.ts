export class Article {
    id?:number;
    title:string;
    date:Date;  
    banner:string;
    miniTitle:string;
    miniature:string;
    sinopsis:string;
    categorie:string;
    html:string;

    constructor(title:string, date:Date, banner:string, miniTitle:string, miniature:string, sinopsis:string, categorie:string, html: string){
        this.title = title;
        this.date = date;
        this.banner = banner;
        this.miniTitle = miniTitle;
        this.miniature = miniature;
        this.sinopsis = sinopsis;
        this.categorie = categorie;
        this.html = html;
    }

}
