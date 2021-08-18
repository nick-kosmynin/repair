window.addEventListener('DOMContentLoaded', function () {

    // const btnPlus = document.querySelector('.services__plus'),
    // const    btnCross = document.querySelector('.services__cross'),
    //     accordionPanel = document.querySelector('.services__button');

    // btnCross.style.display = 'none';



    // accordionPanel.addEventListener('click', function (btnPlus) {

    //     if (btnPlus.style.display == 'block') {
    //         btnPlus.style.display = 'none';
    //     }
    // });


    const accordionPanel = document.querySelector('.services__button'),
        servisePlus = document.createElement('div');

    servisePlus.className = 'service__plus';
    servisePlus.innerHTML = '';
    servisePlus.classList.add('show');
    accordionPanel.appendChild(servisePlus);

    accordionPanel.addEventListener('click',function(){
        if(servisePlus.classList.contains('show')){
            servisePlus.classList.remove('show');
            servisePlus.classList.add('hide');
        }else{
            servisePlus.classList.remove('hide');
            servisePlus.classList.add('show');
        }
    });
});