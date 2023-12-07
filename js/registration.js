const form_login = document.querySelector(".contacts");
const form_register = document.querySelector("form + form");
const link = document.querySelector(".link");


function on_click()
{
    if (link.textContent == "Регистрация")
    {
        form_login.style.display = "none";
        form_register.style.display = "grid";
        link.textContent = "Вернуться";
    }
    else
    {
        form_login.style.display = "grid";
        form_register.style.display = "none";
        link.textContent = "Регистрация";
    }
    return false;
}