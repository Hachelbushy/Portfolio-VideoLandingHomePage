const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langWrap>a');
const headingEl = document.querySelector('.heading');
const btnEl = document.querySelector('.btn')
const aboutEl = document.querySelector('.aboutHeading');
const socialEl =  document.querySelector('.socialMedia');


link.forEach(el =>{
    el.addEventListener('click',() => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');


        const attr = el.getAttribute('lang');

        headingEl.textContent = headingText[attr].heading;
        btnEl.textContent = headingText[attr].btn
        aboutEl.textContent = headingText[attr].aboutHeading;
        socialEl.textContent = headingText[attr].socialMedia;

    });
});

var headingText = {
    'english':{
        'socialMedia':'Follow Me On Social Media!',
        'aboutHeading': 'Full screen video landing page',
        'btn': 'Read More',
        'heading': 'Shoot for the moon. Even if you miss, you will land among the stars.'
    },
    'polish':{
        'socialMedia': 'Śledź Mnie W Mediach Społecznościowych!',
        'aboutHeading': 'Strona główna z pełnoekranowym plikiem video',
        'btn': 'Czytaj Więcej',
        'heading': 'Celuj w księżyc, bo nawet jeśli nie trafisz, będziesz między gwiazdami.'
    }
}
