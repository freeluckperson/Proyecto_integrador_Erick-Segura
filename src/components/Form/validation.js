const validation = (data) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPass = /("[0-9]")/;

  const errors = {};

  if (!regexEmail.test(data.email)) {
    errors.email = "El nombre de usuario tiene que ser un email";
  }

  if (!data.email) {
    errors.email = "el nombre de usuario no puede estar vacio";
  }

  if (data.email.length > 35) {
    errors.email = "el nombre de usuario no puede tener más de 35 caracteres.o";
  }

  if (!regexPass.test(data.password)) {
    errors.password = "la contraseña tiene que tener al menos un número";
  }

  if (data.password.length < 6 || data.password.length > 10) {
    errors.password ="la contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
