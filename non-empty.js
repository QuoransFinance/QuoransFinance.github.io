function required()
{
var empt = document.form1.text1.value;
if (empt === "")
{
alert("It is compulsory to enter an introduction comprising of your educational and employment background , along with your expectatioins from this group.");
return false;
}
else 
{
alert('Great ! Welcome to the group !');
window.open("https://www.google.co.in/");
return true; 
}
}
