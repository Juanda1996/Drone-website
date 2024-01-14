(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const firstName = form.querySelector("input[name='firstName']").value;
  const lastName = form.querySelector("input[name='lastName']").value;
  const email = form.querySelector("input[name='email']").value;
  const cellPhone = form.querySelector("input[name='phone']").value;
  const notes = form.querySelector("[name= 'notes']").value;

  if(firstName == "" && lastName == "" && email == "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName !== "" && lastName !== "" && email == "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName !== "" && lastName == "" && email !== "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName !== "" && lastName == "" && email == "" && cellPhone !== "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName !== "" && email == "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName !== "" && email !== "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName !== "" && email == "" && cellPhone !== "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName == "" && email !== "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName == "" && email !== "" && cellPhone !== "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName == "" && email == "" && cellPhone !== "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName !== "" && lastName !== "" && email !== "" && cellPhone == "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName == "" && lastName !== "" && email !== "" && cellPhone !== "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else if (firstName !== "" && lastName !== "" && email == "" && cellPhone !== "" ){
    event.stopPropagation();
    window.alert("Debe de llenar todos los campos en el formulario")
  }
  else{
    const data = [`Nombre: ${firstName}`,`Apellido: ${lastName}`,` Email: ${email}`, ` Celular: ${cellPhone}`,` Notas: ${notes}`];

    var my_text = `Hola!. Esta es una persona interesada en el curso!: %0A - ${data[0]} %0A - ${data[1]} %0A - ${data[2]} %0A - ${data[3]} %0A - ${data[4]}`;
  
    var token = "6643130010:AAGHVE858cYh8yokvmVTZp-IzmWXwwU6aFA";
    var chat_id = -4059086640;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
  
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    
    window.alert("¡Muchas gracias por tu interes! Muy pronto nos pondremos en contacto contigo.");

    setTimeout(function(){
      location.reload();
  }, 3000);
  }
});


  