
let btn = document.querySelector('.createPostBtn');
btn.addEventListener('click', () => {
    let textarea = document.querySelector('textarea').value;
    let imageurl = document.querySelector('input').value;
    localStorage.setItem('imageUrl', imageurl);
    localStorage.setItem("postTextValue",`${textarea}`);
    window.location.href = "./main.html";
});


