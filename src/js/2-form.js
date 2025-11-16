const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};

const fillOutForm = () => {
  const dataFromLocalStoreg = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (dataFromLocalStoreg === null) {
    return;
  }

  formData = dataFromLocalStoreg;

  const formFromLocalStorage = Object.keys(dataFromLocalStoreg);

  formFromLocalStorage.forEach(key => {
    refs.form.elements[key].value = dataFromLocalStoreg[key];
  });
};
fillOutForm();

const onInputFormsChange = ({ target: formfield }) => {
  const formfieldName = formfield.name;
  const formFieldValue = formfield.value.trim();
  formData[formfieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSumitAction = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
};

refs.form.addEventListener('input', onInputFormsChange);
refs.form.addEventListener('submit', onSumitAction);
