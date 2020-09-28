class User{
    constructor(){
        this.name="";
        this.password="";
        this.phoneNumber="";
        this.location="";

    }
    updateCount(count){
        database.ref("/").update({
            userCount:count

        })
    }
update(){
  //  var userCountref=database.ref("");
}

}