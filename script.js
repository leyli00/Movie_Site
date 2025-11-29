const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");
const left_btn_icn = document.querySelector(".left_icon_png");
const right_btn_icn = document.querySelector(".right_icon_png");
const category_cards = document.querySelector(".category_cards");
const category_card = document.querySelectorAll(".card");

right_btn_icn.addEventListener('click', () => {
    category_cards.scrollLeft += category_card.offsetWidth + 10;
})

left_btn_icn.addEventListener('click', () => {
    category_cards.scrollLeft -= category_card.offsetWidth + 10;
})

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        var line = document.querySelector('.tab_btn_line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => { content.classList.remove('active') });
        all_content[index].classList.add('active');
    })

})