var sNumber = Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;

function setSlide(slideNr)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    sNumber = slideNr - 1;

    hideSlide();
    setTimeout("slideChange()",500);
}

function hideSlide()
{
    $("#slider").fadeOut(500);
}

function slideChange()
{
    sNumber++;
    
    if (sNumber>5) sNumber = 1;
    
    var file = "<img src=\"img/slajd" + sNumber + ".png\" />";
    
    document.getElementById("slider").innerHTML = file;

    $("#slider").fadeIn(500);
    
    timer1 = setTimeout("slideChange()", 5000);
    timer2 = setTimeout("hideSlide()", 4500);
}
