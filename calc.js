function test(){
  
 var type = document.getElementById("restaurantType").value;
  
  var quality = document.getElementById("quality").value;
  
  
  if(type === "Fancy" && quality === "Great"){
     alert("Recommended Tip: 25%");
     }
 else if(type === "Fancy" && quality === "Good"){
     alert("Recommended Tip: 20%");
     }
 else if(type === "Fancy" && quality === "Mediocre"){
     alert("Recommended Tip: 10%");
     }
  else if(type === "Fancy" && quality === "Bad"){
     alert("Recommended Tip: 5%");
     }
  else if(type === "Casual" && quality === "Great"){
     alert("Recommended Tip: 20%");
     }
  else if(type === "Casual" && quality === "Good"){
     alert("Recommended Tip: 15%");
     }
  else if(type === "Casual" && quality === "Mediocre"){
     alert("Recommended Tip: 5%");
     }
  else if(type === "Casual" && quality === "Bad"){
     alert("Recommended Tip: 0%");
     }
}