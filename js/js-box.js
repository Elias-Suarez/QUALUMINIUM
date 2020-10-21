const imgs = document.querySelectorAll('.img-galery');
const addImg = document.querySelector('.add-img');
const imgLight = document.querySelector('.img-light');
const navMenu_ = document.querySelector('.menu');

imgs.forEach(image => {
    image.addEventListener('click', ()=>{
        showImg(image.getAttribute('src'));
    })
});

imgLight.addEventListener('click',(e)=>{
    if(e.target !== addImg){
        imgLight.classList.toggle('show');
        addImg.classList.toggle('show-img');
        navMenu_.style.opacity = '1';
    }
})
const showImg = (imgs) =>{
    addImg.src = imgs
    imgLight.classList.toggle('show');
    addImg.classList.toggle('show-img');
    navMenu_.style.opacity = '0';
}