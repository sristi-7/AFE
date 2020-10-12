class Food {
    constructor(){
        this.foodname="";
        this.quantity="";
        this.phoneNumber="";
        this.address="";
        this.index="";
    }
getFoodCount(){
    database.ref("foodCount").on("value",(data)=>{
        foodCount=data.val();
    
    })
}
   updateFoodCount(count){
       database.ref("/").update({
           foodCount:count
       })
   } 
   update(){
       var foodRef="foods/food"+this.index;
       database.ref(foodRef).set({
           foodName:this.foodName,
           address:this.address,
           phoneNumber:this.phoneNumber,
           quantity:this.quantity

       })
   }

    static getFoodInfo(){
        var foodInfoRef = database.ref("food");
        foodInfoRef.on("value",(data)=>{
            allfoods=data.val();
        })
    }
    
}