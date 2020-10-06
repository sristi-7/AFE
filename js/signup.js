class SignUp{
    constructor(){
        this.continue1=createButton("continue");
    }
    display(){
        form.hide();
        
        var name1 = createInput("name");
        name1.position(width/2-50,height/2-80);
        var username = createInput("username");
        username.position(width/2-50,height/2-40);
        var password = createInput("password");
        password.position(width/2-50,height/2);
        var location = createInput("location");
        location.position(width/2-50,height/2+40)

        var phone = createInput("phone number");
        phone.position(width/2-50,height/2+80);
        var email = createInput("email");
        email.position(width/2-50,height/2+120);

        this.continue1.position(width/2-50,height/2+160);
        this.continue1.mousePressed(()=>{
            user.name1=name1.value();
            user.username=username.value();
            user.password=password.value();
            user.location=location.value();
            user.email=email.value();
            user.phone=phone.value();

            userCount++;
            user.index=userCount;
            user.updateCount(userCount);
            user.update();
            homePage= new Homepage();
            name1.hide();
            username.hide();
            password.hide();
            location.hide();
       
            email.hide();
            phone.hide()
            this.continue1.hide();
            homePage.display();

            
       
       
        })
        

    }
}