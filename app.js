function inc()
{
    let val = document.getElementById("res").innerText;
    parseInt(val);
    val++;
    document.getElementById("res").innerText = val;
    
}

function dec()
{
    let val = document.getElementById("res").innerText;
    parseInt(val);
    val--;
    document.getElementById("res").innerText = val;
}

function res()
{
    document.getElementById("res").innerText = 0;
}