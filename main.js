
let btn = document.getElementById('btn')

window.onload = function (){
    btn.style.display = 'none'
}
window.onscroll = function ()
{
    if(scrollY >= 916)
    {
        btn.style.display = 'block'
    }else
    {
        btn.style.display = 'none'
    }
}

btn.onclick = function () {
    scroll({
        top: 0,
        left:0,
        behavior: "smooth"
    })
}