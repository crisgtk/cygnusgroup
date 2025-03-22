export const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9bn4ak', 'template_1nx4h4s', e.target, '9x-mtp4qFdy0LyxlH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };