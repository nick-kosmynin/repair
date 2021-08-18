window.addEventListener('DOMContentLoaded', function () {

    const accordionPanel = document.querySelector('.services__button'),
        servisePlus = document.createElement('div'),
        serviceCross = document.querySelector('.services__cross'),
        serviceWindow =document.querySelector('.services__panel');



    servisePlus.className = 'service__plus';
    servisePlus.innerHTML = '';
    servisePlus.classList.add('show');
    accordionPanel.appendChild(servisePlus);
    serviceCross.classList.add('hide');

    accordionPanel.addEventListener('click', function () {
        if (servisePlus.classList.contains('show')) {
            // hide plus
            servisePlus.classList.remove('show');
            servisePlus.classList.add('hide');
            // show cross
            serviceCross.classList.remove('hide');
            serviceCross.classList.add('showCross');
            // show service-window
            serviceWindow.classList.add('showCross');

        } else {
            // toggle plus 
            servisePlus.classList.remove('hide');
            servisePlus.classList.add('show');
            // hide cross
            serviceCross.classList.remove('showCross');
            serviceCross.classList.add('hide');
            // hide service-window
            serviceWindow.classList.remove('showCross');
            serviceWindow.classList.add('hide');
        }
    });
});