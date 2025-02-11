let valuePostText = localStorage.getItem("postTextValue");
let postText = document.querySelector(".postText");
postText.innerText = valuePostText;
let imageUrl = localStorage.getItem("imageUrl");
let image = document.querySelectorAll(".postimg");
for( let img of image){
    img.src=imageUrl;
}
let logout = document.querySelector(".logout");

logout.addEventListener("click", function(){
    window.open = "./index.html";
    localStorage.removeItem("user"); 
});

let usName = localStorage.getItem("userName");
let putName = document.querySelector(".inpName").innerText = usName; 