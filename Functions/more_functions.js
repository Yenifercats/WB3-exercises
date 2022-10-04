// Define function
function displayMailingLabel(){
    console.log("Name: Yenifer Tapia");
    console.log("Address: 1234 Koala Ave");
    console.log("City: Atlanta");
    console.log("State: Georgia");
    console.log("Zipcode: 30297");
}

// absolute number is the positive version even if its negative
function addNumbers(a,b){
console.log( a+b)
// console.log(-123)

// console.log(Math.abs(123))
// console.log(Math.abs(-123))
}

function displayReceipt(totalDue, amountPaid){
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    if(amountPaid < totalDue){
        let owed = (totalDue - amountPaid);
        console.log("OWED: $" + owed);
        }else{
            let credit = Math.abs(totalDue - amountPaid);//NEVER NEGATIVE
            console.log("CREDIT BALANCE: $" + credit);
        }
}
//CALL ALL FUNCTIONS BY NAME
displayMailingLabel();
addNumbers(6,7);
displayReceipt(100,40);

