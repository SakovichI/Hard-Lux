import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: 'input[name="Название компании"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотя бы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[name="Имя"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотя бы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },

  {
    ruleSelector: 'input[type="tel"]',
    tel: true,
    rules: [
      {
        rule: 'required',
        errorMessage: 'Заполните номер телефона',
      }
    ]
  },
  {
    ruleSelector: 'input[name="E-mail"]',
    rules: [
      {
        rule: 'email',
        errorMessage: 'Введите корректный E-mail',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'textarea[name="Комментарии"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотя бы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
];

const afterForm = () => {
  console.log('send')
};
validateForms('.callback__form', rules, afterForm);
