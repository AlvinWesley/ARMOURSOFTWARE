const signuplink =document.querySelector('.signuplink');
const loginlink =document.querySelector('.loginlink');
const boxlogin =document.querySelector('.boxlogin');
const closebtn =document.querySelector('.closebtn');
signuplink.addEventListener('click',scrollup);

function scrollup(){
boxlogin.classList.add('scrollup');
closebtn.classList.add('invisible');
}
loginlink.addEventListener('click',scrolldown);

function scrolldown(){
boxlogin.classList.remove('scrollup');
closebtn.classList.remove('invisible');
}
