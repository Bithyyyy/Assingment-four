//Problem-1
function totalFine( fare ) {
    if(typeof fare === "number" && fare >0){
        return fare + fare * .20 + 30;
    }
        
    else{
        return "Invalid";
    }
}
//Problem-2
function  onlyCharacter( str ) {
    if(typeof str === "string"){ 
        return str.toUpperCase().replaceAll(" ","");;
    } 
    else{
        return "Invalid";
    }
     
}
//Problem-3
function  bestTeam( player1, player2 ) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    let total1 = player1.foul +player1.cardY +player1.cardR;
    let total2 = player2.foul +player2.cardY +player2.cardR;
    if(total1 < total2){
        return player1.name;
    }
    else if(total1 > total2) {
        return player2.name;

    }
    else{
    return "Tie";
    }

}
//Problem-4
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
//Problem-5
function  resultReport( marks ) { 
    if(!Array.isArray(marks)){
        return "Invalid";
    } 
    for(const mark of marks){
        if(typeof mark !== "number"){
            return "Invalid";
        }
    } 
    if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    }

    let fail = 0;
    let passed = 0;
    let score =0;
    for(const mark of marks){
        score += mark;
        if(mark >= 40){
            passed++;
        }
        else{
            fail++;
        }   
    }
    let subFinalScore = score / marks.length ;
    let finalScore = Math.round(subFinalScore);
    return {
        finalScore: finalScore,
        pass: passed,
        fail: fail
    };
}