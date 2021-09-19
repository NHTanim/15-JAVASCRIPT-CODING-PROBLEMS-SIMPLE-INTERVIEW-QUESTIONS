
// 




var businessMan = 890;
var minister = 980;
var sohib = 900;


// short rules
var max = Math.max(businessMan, minister, sohib);
console.log("This man is bigger " + max);

// ---------------------------------------------------

// if else
if (businessMan > minister) {
   if (businessMan > sohib) {
       console.log("business man is bigger");
   }else{
       console.log("sohib is bigger");
   }
}
else {
    if (minister > sohib) {
        console.log("minister is bigger");
    }else{
        console.log("sohib is bigger");
    }
}






// 