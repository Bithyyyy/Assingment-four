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
console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));

