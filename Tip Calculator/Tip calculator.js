var amount = parseFloat(document.getElementById("amount").value);
function isNum(evt) 
{
    var charCode = (evt.which) ? evt.which : evt.value;
    if ((charCode >= 48 && charCode <= 57) || charCode == 46) 
    {
        amount = Number.fromCharCode(charCode);
        document.getElementById("amount").value = amount.value;
        return true;
    } 

    else 
    {
        document.getElementById("amount").value = "Enter Numeric value";
        return false;
    }
}

var tipPercents = document.getElementById("tipPercent");
var percentbox = document.getElementById("percentbox");

document.getElementById("percentbox").value = tipPercents.value;

var Amount = document.getElementById('amount');

tipPercents.addEventListener('input', function() {
    document.getElementById("percentbox").value = tipPercents.value + "%";

    if(tipPercents.value == 0)
    {
        document.getElementById("tipAmount").value = 0;

        // final amount with tip 
        document.getElementById("totalAmount").value = Amount.value;
        
    }

    else
    {
        var tip = parseFloat(Amount.value);
        tip = eval((tip * parseFloat(tipPercents.value)) / 100);
        document.getElementById("tipAmount").value = tip;

        // final amount with tip 
        TotalBill = eval(parseFloat(Amount.value) + tip);
        document.getElementById('totalAmount').value = TotalBill;
  
    }
});



