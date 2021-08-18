window.addEventListener('DOMContentLoaded', function () {

    // const btnPlus = document.querySelector('.services__plus'),
    const    btnCross = document.querySelector('.services__cross'),
        accordionPanel = document.querySelector('.services__button');

    btnCross.style.display = 'none';


    
    accordionPanel.addEventListener('click', function (btnPlus) {
        
        if (btnPlus.style.display == 'block') {
            btnPlus.style.display = 'none';
        }
    });

    




});