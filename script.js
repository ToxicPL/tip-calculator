function calculatetip() {
    var bill= document.getElementById("bill").value//Amount of bill
    var quality=document.getElementById("servicequality").value;//service quality
    var people=document.getElementById("people").value;//number of people to share the bill
    //validiate input
    if (bill === " "||quality == 0){
        alert("Please enter values");
        return;
    }
    //check if input is empty or eless than or equal to 1
    if (people === ""||people <=1) {
        people= 1;
    
    document.getElementById("each").style.display="none"; 
        
    } else {
        document.getElementById("each").style.display="block";
    }

    var total= (bill*quality)/people;
    total = Math.round(total * 100) / 100;//this line allow us to always have two digits
    var total = total.toFixed(2);

    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML=total;
    console.log(total);
}
    document.getElementById("totaltip").style.display="none";

