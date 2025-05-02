function submitHandler(event) {
    event.preventDefault(); 
  
    const form = event.target;
  
    const userName = form.querySelector('[name="userName"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const birthday = form.querySelector('[name="birthday"]').value;
    const email = form.querySelector('[name="email"]').value;
  
    console.log('Імʼя:', userName);
    console.log('Телефон:', phone);
    console.log('Дата народження:', birthday);
    console.log('Email:', email);
  }