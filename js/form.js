class Form{
    constructor(){
        this.username=createInput("username");
        this.password=createInput("","password");
        this.button=createButton("login");
        this.signIn=createButton("sign In");
    }

    display(){
        var title= createElement("h2","appname");
        title.position(width/2-50,20);
        this.username.position(width/2-50,height/2-20);
        this.password.position(width/2-50,height/2+10);
        this.button.position(width/2-50,height/2+40);
        this.signIn.position(width/2-50,height/2+70);

    }
}