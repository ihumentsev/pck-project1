(() => {
    // (function() {
    //   emailjs.init('Lvw8p1gLpBB3Bt8u2'); // замените 'user_xxxxxxxxx' на ваш публичный ключ
    // })();
    const refs = {
      openModalBtn: document.querySelector("[data-open]"),
      closeModalBtn: document.querySelector("[data-close]"),
      backdrop: document.querySelector("[data-backdrop]"),
      modal: document.querySelector("[data-modal]"),
      form: document.querySelector("[data-form]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Создаем объект FormData из формы
    const formData = new FormData(refs.form);
  
    // Преобразуем FormData в объект для удобства работы
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log( formObject);
      alert(`Листа відправлено!!!!
        Ім'я: ${formObject.name}
        Телефон: ${formObject.phone}
        Пошта: ${formObject.email}
        Коментарій: ${formObject.coment}
        Згода: ${formObject.agree}
        `);
         // Параметры для EmailJS
        //  emailjs.init('Lvw8p1gLpBB3Bt8u2'); //замените PUBLIC_KEY на ID вашего сервиса
    // const serviceID = 'service_wa5h30i'; // замените SERVICE_ID на ID вашего сервиса
    // const templateID = 'template_as5x3ss'; // замените TEMPLATE_ID на ID вашего шаблона
   
    // Отправка данных через EmailJS
    emailjs.send(serviceID, templateID, formObject)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Листа відправлено!!!!');
        toggleModal();
      }, (error) => {
        console.log('FAILED...', error);
        alert('Ошибка при отправке письма');
        toggleModal();
      });
    });
  
    function toggleModal(e) {
      console.log("Функция работает!!!!!");
      refs.backdrop.classList.toggle("is-hidden");
      refs.modal.classList.toggle("is-hidden");
    }
  })();