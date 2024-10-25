const bgElements =()=> {
    const elements = document.querySelectorAll(".set-bg");

    elements.forEach((elem)=> {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    })
};

bgElements();

// блоки с информацией следует выводить в консоль через console.dir(), чтобы посмотреть все примененные к блоку методы 