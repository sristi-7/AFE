class Form{
    constructor(){
        this.username=createInput("username");
        this.password=createInput("","password");
        this.button=createButton("sign Up");
        this.signIn=createButton("sign In");
    }
    hide(){
        this.username.hide();
        this.password.hide();
        this.button.hide();
        this.signIn.hide();
    }

    display(){
        var title= createElement("h2","appname");
        title.position(width/2-50,20);
        this.username.position(width/2-50,height/2-20);
        this.password.position(width/2-50,height/2+10);
        this.button.position(width/2-50,height/2+40);
        this.signIn.position(width/2-50,height/2+70);

        User.getUserInfo();
        User.getFoodInfo();
        this.button.mousePressed(()=>{
            newUser=new SignUp();
            newUser.display();
            state=1;
        })

        this.signIn.mousePressed(()=>{

            var flag=0;
            for(var usr in allUsers){
                if(allUsers[usr].username===this.username.value() && allUsers[usr].password===this.password.value() ){
                    console.log("hello");
                    user.name=allUsers[usr].name;
                    user.password=allUsers[usr].password;
                    user.username=allUsers[usr].username;
                    user.email=allUsers[usr].email;
                    user.location=allUsers[usr].location;
                    user.phone=allUsers[usr].phone;

                    this.hide();
                    homePage= new Homepage();
                    homePage.display();
                    flag=1;
                }
            }
            if(flag===0){
                var warning=createElement("h5","wrong username / password");
                warning.position(width/2-50,height/2+80);
            }


        })

    }
}