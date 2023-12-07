"use strict";


for (let button of document.querySelectorAll("button"))
{
    button.addEventListener("click", function()
    {
        if (button.textContent == "Записаться!")
        {
            button.textContent = "Вы записаны!";
        }
        else
        {
            button.textContent = "Записаться!";
        }
    });
}