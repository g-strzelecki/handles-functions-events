function check1()
{
    var number = document.getElementById("field").value;
    if (number > 0) document.getElementById("score").innerHTML="Dodatnia";
    else if (number < 0) document.getElementById("score").innerHTML="Ujemna";
    else if (number == 0 && number != "") document.getElementById("score").innerHTML="Zero";
    else document.getElementById("score").innerHTML="To nie jest liczba";
}

function writeOn()
{
    var number1 = Number(document.getElementById("field1").value);
    var number2 = Number(document.getElementById("field2").value);
    var label = "";

    /*document.getElementById("score2").innerHTML = number1 + " " + number2;*/

    if (number1 == number2) 
    {
        document.getElementById("score2").innerHTML = "Wartości są identyczne";
    }
    else if (number1 < number2)
    {
        for (i=number1; i<=number2; i++)
        {
            label = label + i + " ";
        }
        document.getElementById("score2").innerHTML = label;
    }
    else if (isNaN(number1))
    {
        document.getElementById("score2").innerHTML = "Wartość z lewego pola nie jest liczbą";
    }
    else if (isNaN(number2))
    {
        document.getElementById("score2").innerHTML = "Wartość z prawego pola nie jest liczbą";
    }
    else if (number1 > number2)
    {
        for (i=number1; i>=number2; i--)
        {
            label = label + i + " ";
        }
        document.getElementById("score2").innerHTML = label;
    }
}
