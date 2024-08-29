let numberBtn =document.querySelectorAll(".drum").length;

for (let i = 0; i<numberBtn; i++)
{
document.querySelectorAll(".set")[i].addEventListener("click",function handleClick(){
    alert("I got clicked!")
});

}
