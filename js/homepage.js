class Homepage{
        constructor(){
            this.donate = createButton("donate");
            this.receive = createButton("receive");
        }
        display(){
            this.donate.position(width/2-50,height/2-40);
            this.receive.position(width/2-50,height/2+10);
            

        }
}