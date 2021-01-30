// Main Function Event With Onclick Function***//***Include{ FirstClass , Economy (Button & Input Id) }***//
function BtnSelection(getInputId, selectBtn) {
    const numberInput = document.getElementById(getInputId + 'Input'); // Get (FirstClass & Economy) input Id

    if (selectBtn == true) {
        numberInput.value = parseInt(numberInput.value) + 1;
        document.getElementById("confirmMessage").style.display = "none"; // Get confirmMessage Id For Display None

    } else if (selectBtn == false) {
        numberInput.value = parseInt(numberInput.value) - 1;
        document.getElementById("confirmMessage").style.display = "none"; // Get confirmMessage Id For Display None

        if (numberInput.value < 0) {
            alert("Please Click the plus button to book your desired ticket");
            return numberInput.value = 0;

        }
    }

    // Total Amount Calculation====//
    const subtotalPrice = document.getElementById("subtotalPrice");
    const tenPercentVat = document.getElementById("tenPercentVat");
    const totalCost = document.getElementById("totalCost");

    // Calculate Subtotal Amount***/
    subtotalPrice.innerText = document.getElementById("firstClassInput").value * 150 + document.getElementById("economyInput").value * 100;

    // Calculate Charge 10% VAT***/
    tenPercentVat.innerText = Math.round(subtotalPrice.innerText * 0.1);

    // Calculate TotalCost***/
    totalCost.innerText = parseInt(subtotalPrice.innerText) + parseInt(tenPercentVat.innerText);

};


// /* <!-- Confirmation Message JS--> */
function bookBtn(firstClass, economy) {
    const firstClassInput = document.getElementById(firstClass); // Get FirstClass input Id
    const economyInput = document.getElementById(economy); // Get Economy input Id
    document.getElementById("confirmMessage").style.display = "block";
    
    if (firstClassInput.value == 0 && economyInput.value == 0) {
       alert("Sorry..!!😙 you didn't Buy any ticket."); 
       return document.getElementById("confirmMessage").style.display = "none";
    }
};