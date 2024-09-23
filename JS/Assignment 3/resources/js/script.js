function liking (like, like_text, button_text)
{
    like = document.getElementById("like-" + like);
    like_text = document.getElementById("like_text" + like_text);

    if (button_text.innerText == "Like")
    {
        var save = like.innerText;
        save++;
        like.innerText = save;
        button_text.className = "content-card-button-liked";
        button_text.innerText = "Liked";
    }
    else
    {
        save = like.innerText;
        save--;
        like.innerText = save;
        button_text.className = "content-card-button";
        button_text.innerText = "Like";
    }
}