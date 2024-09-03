p1=prompt("Enter player 1 Representator");
p2=prompt("Enter player 2 Representator");
let pp1=document.querySelector(".name1");
let pp2=document.querySelector(".name2");
pp1.innerText=p1;
pp2.innerText=p2;
f=1;





while (f==1) {
    
let but=document.querySelector('.d1');
but.addEventListener("click",()=>
{
    x=Math.floor(Math.random() * 6)+1;
    if (x==1) {
        but.innerText=x;
    }
    if (x==2) {
        but.innerText=x;
    }
    if (x==3) {
        but.innerText=x;
    }
    if (x==4) {
        but.innerText=x;
    }
    if (x==5) {
        but.innerText=x;
    }
    if (x==6) {
        but.innerText=x;
    }

})

}