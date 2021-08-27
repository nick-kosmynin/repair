window.addEventListener('DOMContentLoaded', function () {

    // accordion

    const accordionPanel = document.querySelectorAll('.services__button'),
        servicePlus = document.querySelectorAll('.services__plus'),
        serviceCross = document.querySelectorAll('.services__cross'),
        serviceBlock = document.querySelector('.services__accordion');


    function showPlus(i = 0) {
        servicePlus[i].classList.toggle('show');
        serviceCross[i].classList.toggle('hide');
    }
    showPlus();

    function hidePlus() {
        servicePlus.forEach(plus => {
            plus.classList.toggle('hide');
        });
    }
    hidePlus();

    servicePlus.forEach(plus => {
        plus.classList.add('show');
    });


    serviceCross.forEach(cross => {
        cross.classList.add('hide');
    });



    serviceBlock.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('services__button')) {
            accordionPanel.forEach((item, i) => {
                if (target == item) {
                    hidePlus();
                    showPlus(i);
                }
            });

        }

    });





    accordionPanel.forEach(panel => {
        panel.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('show');

        });
    });


    // forms

    const forms = document.querySelector('form');
    const btn = document.querySelector('button.btn');
    const message = {
        loading: 'загрузка',
        succces: 'спасибо, мы с вами скоро свяжемся',
        failure: 'что-то пошло не так'
    };

    

    // создаем функцию отправки данных

    function postData() {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            //cоздаем окно оповещения
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            btn.append(statusMessage);

            const request = new XMLHttpRequest();
            //настройка запроса
            request.open('POST', 'server.php');
            //создаем формат передачи данных
            request.setRequestHeader('Content-type', 'multipart/form-data');

            const formData = new FormData();
            // отправка данных
            request.send(formData);
            // отслеживаем загрузку
            request.addEventListener('load', ()=>{
                if(request.status === 200){
                    console.log(request.response);
                    statusMessage.textContent = message.succces;
                }else{
                    statusMessage.textContent = message.failure;
                }
            });

        });
    }
    postData();
  
   


});