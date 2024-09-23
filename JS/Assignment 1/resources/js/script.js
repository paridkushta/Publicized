function log (element)
{
    if (element.value == "Login") {element.className = "logout-button"; element.value = "Logout";}

    else {element.className = "login-button"; element.value = "Login";}
}

function like (element)
{
    if (element.innerText == "13 likes") {element.className = "like"; element.innerText = "14 likes"; alert('Ninja was liked');}

    else if (element.innerText == "37 likes") {element.className = "like"; element.innerText = "38 likes"; alert('Ninja was liked');}

    else if (element.innerText == "14 likes") {element.className = "definition-button"; element.innerText = "13 likes";}

    else if (element.innerText == "38 likes") {element.className = "definition-button"; element.innerText = "37 likes";}
}

function show ()
{
    document.querySelector(".secondary-button").style.display = "";
}

function hide (element)
{
    event.stopPropagation();
    element.style.display = "none";
}