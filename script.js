const imgSlider = document.querySelector('.img-slider')
const items = document.querySelectorAll('.item')
const imgItem = document.querySelectorAll('.img-item')
const infoItem = document.querySelectorAll('.info-item')

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

let colors = ['#3674be','#d26181','#ceb13d','#c6414c','#171f2b','#50aa61']

let indexSlider = 0;
let index = 0;

const slider = () => {
    imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;

    items.forEach(item => {
        item.style.transform = `rotate(${indexSlider * -60}deg)`;
    })


    document.querySelector('.img-item.active').classList.remove('active');
    imgItem[index].classList.add('active');

    document.querySelector('.info-item.active').classList.remove('active');
    infoItem[index].classList.add('active');

    document.body.style.background = colors[index];
}

nextBtn.addEventListener('click', () => {
    indexSlider++;

    index++;
    if (index > imgItem.length - 1){
        index = 0;
    }

    slider();
})

prevBtn.addEventListener('click', () => {
    indexSlider--;

    index--;
    if (index < 0){
        index = imgItem.length - 1;
    }

    slider();
})