

function zoomin(){
       var milkyWayImage = document.getElementById("MilkyWayImage");
       var currWidth = milkyWayImage.clientWidth;
       if(currWidth === "200"){
           alert("Maximum zoom-in level reached.");
       } else{
           milkyWayImage.style.width = (currWidth + 50) + "px";
       }
   }
