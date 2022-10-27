import React, { useState } from 'react';
import {
  Box, Button, Container, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import Check from '../../../../assets/images/Check';
import './MessageBox.css';

const { SERVICE_TOKEN, TEMPLATE_TOKEN, PUBLIC_KEY } = require('../../../../config/environment');

function MessageBox() {
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
      },
    );
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      email: Yup.string().email('Direccion de email no es valida').required('Email es requerido'),
      message: Yup.string().required('Mensaje es requerido'),
    }),
    onSubmit: (values) => {
      SendEmail(values);
      setSendEmailSuccess(true);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Container maxWidth="xl">
      <Box overflow="hidden" style={{ position: 'relative', minHeight: '300px' }}>
        {!sendEmailSuccess && (
          <form className="form" onSubmit={formik.handleSubmit}>
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              helperText={formik.touched.name && formik.errors.name}
              variant="filled"
              margin="normal"
              type="text"
              fullWidth
              id="name"
              label="Nombre Completo"
              name="name"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
              variant="filled"
              type="email"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              error={Boolean(formik.touched.message && formik.errors.message)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
              helperText={formik.touched.message && formik.errors.message}
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
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                className="submitBtn"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
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
            <Typography
              variant="body2"
            >
              Your message has been successfully sent, Ill reply as soon as possible.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default MessageBox;
