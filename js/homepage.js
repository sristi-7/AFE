class Homepage{
        constructor(){
            this.donate = createButton("donate");
            this.receive = createButton("receive");
        }
        display(){
            this.donate.position(width/2-50,height/2-40);
            this.receive.position(width/2-50,height/2+10);
            this.receive.mousePressed(()=>{
                this.receive.hide();
                this.donate.hide();
                
                console.log(allfoods);
                var display_position=100;

                for(var food in allfoods){  
                    var p=createElement("h6");
                    p.html(allfoods[food].foodname+" at "+allfoods[food].address+" phone: "+allfoods[food].phone);
                    p.position(50,display_position);
                    display_position=display_position+40;
                }
     
            })
            this.donate.mousePressed(()=>{
                this.receive.hide();
                this.donate.hide();
                var foodName=createInput("foodName");
                var quantity=createInput("quantity");
                var phoneNumber=createInput("phoneNumber");
                var address=createInput("address");
                foodName.position(width/2-50,height/2-20);
                quantity.position(width/2-50,height/2+20);
                phoneNumber.position(width/2-50,height/2+60);
                address.position(width/2-50,height/2+100);
                var button= createButton("continue");
                button.position(width/2-50,height/2+140);
                button.mousePressed(()=>{
                    foodCount ++
                    foodName.hide();
                    quantity.hide();
                    phoneNumber.hide();
                    address.hide();
                })
            })

        }
}