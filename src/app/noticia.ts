export class Noticia {

    user: String;
    title: String;
    comments: number;
    points: number;
    time: Date;
    url: String;

    constructor(user: String,title:String,comments:number,points:number,time:Date,url:String){
        this.user=user;
        this.title=title;
        this.comments=comments;
        this.points=points;
        this.time=time;
        this.url=url;

    }
}
