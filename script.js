const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".tab_content");

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active') })
        tab.classList.add('active');

        var line = document.querySelector('.tab_btn_line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {
            content.classList.remove('active')
        });
        all_content[index].classList.add('active');
    })
})