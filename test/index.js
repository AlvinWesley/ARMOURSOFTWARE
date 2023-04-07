const btn=document.querySelector('.mybtn');
let mytext=document.getElementById("mytxt");
let count=5;
btn.addEventListener("click",getthis);
// function getthis(){
//     mytext.textContent=changetext();
// }

// function changetext(){
//     return count==5? "counter is true":"counter is not true";
// }
function getthis(){
    mytext.classList.add('jeddi');
}