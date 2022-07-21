import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import InputText from '../../../components/atoms/InputText';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormItem from '../../../components/molecules/FormItem';
import FormInput from '../../../components/molecules/FormInput';
import FormError from '../../../components/molecules/FromError';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import ButtonText from '../../../components/atoms/ButtonText';
import Typography from '../../../components/atoms/Typography';
import { PAGES } from '../../../constants/title';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import { validateEmail } from '../../../functions';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

const UsersLogin = () => {
  const navigate = useNavigate();
  const initialValue = { inputId: '', inputPassword: '' };
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const data = {
        email: formValues.inputId,
        password: formValues.inputPassword,
      };
      const result = await API.post('/api/users/login', '', data);
      const token = result.data.token;
      const REGNumber = result.data.REGNumber;
      localStorage.setItem('token', token);
      try {
        API.userGet('/api/users/user').then((res) => {
          const role = res.role;
          if (role === 'owner') {
            if (!REGNumber) {
              navigate('/account/restaurantscreate');
            } else {
              localStorage.setItem('REGNumber', REGNumber);
              navigate('/');
            }
          } else {
            navigate('/');
          }
        });
      } catch (err: any) {
        console.error(err);
      }
      alert(`정상적으로 로그인되었습니다.`);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors: valueObject = {};
    const isInputIdValue = values.inputId;
    const isInputPasswordValue = values.inputPassword;
    const isValidIdEmail = validateEmail(values.inputId);
    const isMinPasswordLength = isInputPasswordValue.length >= 4;

    if (!isInputIdValue) {
      errors.inputId = ERROR.ID_INPUT;
    } else if (!isValidIdEmail) {
      errors.inputId = ERROR.ID_EMAIL_VALID;
    }

    if (!isInputPasswordValue) {
      errors.inputPassword = ERROR.PASSWORD_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.PASSWORD_MIN_LENGTH;
    }

    return errors;
  };

  const inputData = [
    {
      htmlFor: 'inputId',
      labelTitle: LABELTITLE.ID,
      type: 'text',
      id: 'inputId',
      name: 'inputId',
      value: formValues.inputId,
      maxLength: undefined,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.ID,
      error: formErrors.inputId,
    },
    {
      htmlFor: 'inputPassword',
      labelTitle: LABELTITLE.PASSWORD,
      type: 'password',
      id: 'inputPassword',
      name: 'inputPassword',
      value: formValues.inputPassword,
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.PASSWORD,
      error: formErrors.inputPassword,
    },
  ];

  return (
    <UI.Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader title={PAGES.USER_LOGIN} />
        {inputData.map((item, index) => {
          return (
            <FormItem key={`${item.id}-${index}`}>
              <FormInput htmlFor={item.htmlFor} labelTitle={item.labelTitle}>
                <InputText
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  maxLength={item.maxLength}
                  autoComplete={item.autoComplete}
                  onChange={item.onChange}
                  placeholder={item.placeholder}
                />
              </FormInput>
              {item.error ? <FormError message={item.error} /> : null}
            </FormItem>
          );
        })}

        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            로그인
          </Button>
        </FormFooter>
      </Form>
      <UI.JoinContainer>
        <Typography>TEAM3의 회원이 아니신가요?</Typography>
        <ButtonText component='primary' to={'/users/register'}>
          회원가입
        </ButtonText>
      </UI.JoinContainer>
    </UI.Container>
  );
};

export default UsersLogin;
