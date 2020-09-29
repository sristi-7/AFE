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

}