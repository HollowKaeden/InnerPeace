"use strict";

function parallax_effect()
{
    var yPos = window.scrollY;
    var parallax = document.querySelector('.parallax');
    parallax.style.backgroundPosition = 'center ' + (yPos * 0.1) + 'px';
}

window.onload = parallax_effect;
window.onscroll = parallax_effect;