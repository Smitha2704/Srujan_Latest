class Player{
 constructor(){
   this.name=null;
   this.index=null;
   this.x=900;
   this.y=600;
   this.redPlanes = 0;
   this.yellowPlanes = 0;
   this.llama = 0;
   this.bomb=0;
   this.score= 0;
   }
  getCount(){
   var gameStateref=database.ref('playerCount');
   gameStateref.on("value",(data)=>{
     playerCount=data.val();
   });
  }
 
  updateCount(count){
   database.ref('/').update({
     playerCount:count
   })  
  
  }

  update(){
   var playerIndex="players/player"+this.index;
   database.ref(playerIndex).set({
     name:this.name,
     x:this.x,
     y:this.y,
     redPlanes: this.redPlanes,
     yellowPlanes: this.yellowPlanes,
     llama: this.llama,
     bomb: this.bomb,
     score: this.score
   })  
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

}