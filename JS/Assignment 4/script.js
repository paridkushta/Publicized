
document.querySelectorAll("#first .card-list-item span:nth-of-type(2) img").forEach(element =>
{
    element.onclick = () =>
    {
        var requests = document.querySelector("#requests").innerText;
        var connections = document.querySelector("#connections").innerText;

        element.parentElement.parentElement.remove();


        if (element.classList.contains("accept"))
        {
            requests--;
            connections++;
            document.querySelector("#requests").innerText = requests;
            document.querySelector("#connections").innerText = connections;
        }
        else
        {
            requests--;
            document.querySelector("#requests").innerText = requests;
        }
    };


});

function change_name ()
{
    document.querySelector(".name").innerText = "Changed Name";
}