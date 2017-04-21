// function of the test button
function test(){
// linking the restaurant type id to a value on javascript
 var type = document.getElementById("restaurantType").value;
// linking the quality of service id to a value on javascript  
  var quality = document.getElementById("quality").value;
  
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 25%
  if(type === "Fancy" && quality === "Great"){
     alert("Recommended Tip: 25%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 20%
 else if(type === "Fancy" && quality === "Good"){
     alert("Recommended Tip: 20%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 10%
 else if(type === "Fancy" && quality === "Mediocre"){
     alert("Recommended Tip: 10%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 5%
  else if(type === "Fancy" && quality === "Bad"){
     alert("Recommended Tip: 5%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 20%
  else if(type === "Casual" && quality === "Great"){
     alert("Recommended Tip: 20%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 15%
  else if(type === "Casual" && quality === "Good"){
     alert("Recommended Tip: 15%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 5%
  else if(type === "Casual" && quality === "Mediocre"){
     alert("Recommended Tip: 5%");
     }
  // if these two things are chosen for restaurant type and quality of service when the test button is pressed, suggest a tip of 0%
  else if(type === "Casual" && quality === "Bad"){
     alert("Recommended Tip: 0%");
     }
}