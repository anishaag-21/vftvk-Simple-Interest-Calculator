function compute()
{
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("interest_rate").value;
    var years =document.getElementById("years").value;
    var interest = principal*years*rate/100;

    if (principal=="") //validating non-zero value
    {
        
        alert("Please enter a positive number");
        document.getElementById("principal").value='';
        document.getElementById("principal").focus();
    }
    else
    {
        var d = new Date();
        var y = d.getFullYear();
        var future_year = Number(y) + Number(years);
        var result = document.getElementById("result");
        result.innerHTML="If you deposit <mark>" + principal +"<mark>,<br/> at an interest rate of <mark>"
        +rate+"%<mark>,<br/> You will receive an amount of <mark>"+ interest+
        "<mark>,<br/>in the year<mark>"+future_year+"</mark><br/>"
    }
}
        
//To display slider value
function slider()
{
    var rate=document.getElementById("interest_rate");
    var output=document.getElementById("showrate");
    output.innerHTML = rate.value

    rate.oninput=function()
    {
        output.innerHTML=this.value
    }
}       

//to validate principal amount

function positive_value()
{
    var principal = document.getElementById("principal").value
    if (Number (principal)<=0)
    {
        alert("Please enter a positive number");
        document.getElementById("principal").value='';
        document.getElementById("principal").focus();
        return false;
    }
    else 
    {
        return true
    }
}
