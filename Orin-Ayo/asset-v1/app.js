/** Coolest orin ayo remake probably :) **/
var app=new function(){this.name="Orin Ayo",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=5990,this.bpm=160,this.totalframe=288,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=96,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#121212",this.col0="#919191",this.col1="#5f5f5f",this.col2="#4b4b4b",this.col3="#373737",this.col4="#232323",this.animearray=[{name:"01harry",color:"4b4b4b",uniqsnd:!1},{name:"02hart",color:"4b4b4b",uniqsnd:!1},{name:"03stadue",color:"4b4b4b",uniqsnd:!1},{name:"04Stranger",color:"4b4b4b",uniqsnd:!1},{name:"05Theodore",color:"4b4b4b",uniqsnd:!1},{name:"06ethan",color:"4b4b4b",uniqsnd:!1},{name:"07unknown",color:"4b4b4b",uniqsnd:!1},{name:"08dougg",color:"4b4b4b",uniqsnd:!1},{name:"09Agent 30",color:"4b4b4b",uniqsnd:!1},{name:"10Dave",color:"4b4b4b",uniqsnd:!1},{name:"11zombie",color:"4b4b4b",uniqsnd:!1},{name:"12TV",color:"4b4b4b",uniqsnd:!1},{name:"13kurt",color:"4b4b4b",uniqsnd:!1},{name:"14lilac",color:"4b4b4b",uniqsnd:!1},{name:"15faith",color:"4b4b4b",uniqsnd:!1},{name:"16'project'",color:"4b4b4b",uniqsnd:!1},{name:"17adward",color:"4b4b4b",uniqsnd:!1},{name:"18sailor",color:"4b4b4b",uniqsnd:!1},{name:"19kaski",color:"4b4b4b",uniqsnd:!1},{name:"20the god",color:"4b4b4b",uniqsnd:!1},{name:"21Pike",color:"4b4b4b",uniqsnd:!1},{name:"22Locke",color:"4b4b4b",uniqsnd:!1}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};