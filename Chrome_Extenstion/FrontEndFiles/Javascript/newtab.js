let mainBody = document.getElementById("main_body");

var item = localStorage.getItem('name');

if(item)
{
    console.log(item)
}
else
{
    let name = prompt("what is your name?");
    localStorage.setItem('name',name);
    item = name;
}


document.getElementById("Title").innerHTML += ` ${item}`