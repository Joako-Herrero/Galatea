export class Categorie {
    id?:string;
    title:string;
    banner:string;
    html:string;

    constructor(title:string, banner:string, html: string){
        this.title = title;
        this.banner = banner;
        this.html = html;
    }
}
