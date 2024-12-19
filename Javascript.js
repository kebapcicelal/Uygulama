
const wrapper = document.querySelector('.wrapper');
const longinLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
longinLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});


function saveMessage() {
    const message = document.getElementById("message").value;
    if (message.trim() !== "") {

        const li = document.createElement("li");
        li.textContent = message;

        document.getElementById("messagesList").appendChild(li);

        document.getElementById("message").value = "";
    } else {
        alert("Lütfen bir mesaj girin!");
    }
}