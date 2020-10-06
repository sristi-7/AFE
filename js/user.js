class User{
    constructor(){
        this.name1="";
        this.username="";
        this.password="";
        this.phone="";
        this.email="";
        this.location="";
        this.index=null;

    }
    getCount(){
        database.ref("userCount").on("value",(data)=>{
            userCount=data.val();
            
        })
    }
    updateCount(count){
        database.ref("/").update({
            userCount:count

        })
    }
    update(){
        var userRef="users/user"+this.index;
        database.ref(userRef).set({
            name:this.name1,
            username:this.username,
            password:this.password,
            email:this.email,
            phone:this.phone,
            location:this.location
        })
    }
static getUserInfo(){
    var userInfoRef = database.ref("users");
    userInfoRef.on("value",(data)=>{
        allUsers=data.val();  
    })

       
    
}
static getFoodInfo(){
    var foodInfoRef = database.ref("food");
    foodInfoRef.on("value",(data)=>{
        allfoods=data.val();
    })
}

}