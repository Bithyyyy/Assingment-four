function totalFine( fare ) {
          if(typeof fare === "number" && fare >0){
            return fare + fare * .20 + 30;
          }
        
          else{
            return "Invalid";
          }
}

console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));

