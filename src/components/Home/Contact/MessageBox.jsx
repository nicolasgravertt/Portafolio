import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, InputLabel, useTheme } from '@mui/material';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import Check from '../../../assets/images/Check';
import './MessageBox.css';
import { tokens } from '../../../theme/Theme';

const { SERVICE_TOKEN, TEMPLATE_TOKEN, PUBLIC_KEY, RECAPTCHA_TOKEN } = require('../../../config/environment');

function MessageBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [sending, setSending] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);

  const SendEmail = (object) => {
    setSending(true);
    emailjs.send(SERVICE_TOKEN, TEMPLATE_TOKEN, object, PUBLIC_KEY).then(
      () => {
        setSendEmailSuccess(true);
        setSending(false);
      },
      () => {
        setSending(false);
      }
    );
  };

  return (
    <Container maxWidth="xl">
      <Box overflow="hidden" style={{ position: 'relative', minHeight: '300px' }}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
            captcha: '',
          }}
          onSubmit={(values) => {
            SendEmail(values);
            setSendEmailSuccess(true);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Nombre es requerido'),
            email: Yup.string().email('Direccion de email no es valida').required('Email es requerido'),
            message: Yup.string().required('Mensaje es requerido'),
            captcha: Yup.string().required('Captcha Requerido'),
          })}
        >
          {({ values, errors, touched, handleSubmit, setFieldValue, handleBlur, handleChange }) => (
            <>
              {!sendEmailSuccess && (
                <form className="form" onSubmit={handleSubmit}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    variant="filled"
                    margin="normal"
                    type="text"
                    fullWidth
                    id="name"
                    label="Nombre Completo"
                    name="name"
                  />
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    variant="filled"
                    type="email"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                  />
                  <TextField
                    error={Boolean(touched.message && errors.message)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                    variant="filled"
                    margin="normal"
                    fullWidth
                    name="message"
                    label="Mensaje"
                    type="text"
                    id="message"
                    multiline
                    minRows={5}
                  />
                  <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
                    <ReCAPTCHA
                      sitekey={RECAPTCHA_TOKEN}
                      onChange={(response) => {
                        setFieldValue('captcha', response);
                      }}
                    />
                    {errors.captcha && touched.captcha && (
                      <InputLabel style={{ color: '#d32f2f' }}>{errors.captcha}</InputLabel>
                    )}
                  </Box>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                      className="submitBtn"
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={{ backgroundColor: '#02052f', color: colors.grey[400] }}
                      disabled={sending}
                    >
                      Contactame
                    </Button>
                  </Box>
                </form>
              )}
              {sendEmailSuccess && (
                <Box
                  style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box m={2}>
                    <Check width="150" />
                  </Box>
                  <Typography variant="body2">
                    Tu mensaje ha sido enviado satisfactoriamente, Responderé tan rápido como sea posible.
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default MessageBox;
