import Head from 'next/head';
import Template from '@/components/Template';
import React from 'react';
import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import CustomSelect from '../components/CustomSelect';
import { Button } from '@chakra-ui/react';

export interface FormValues {
  singleLanguage: string;
  multiLanguages: string[];
}

export function SignupForm() {
  const defaultValues: FormValues = {
    singleLanguage: '',
    multiLanguages: []
  };

  // Some dummy language data
  const languageOptions = [
    {
      label: 'Chinese',
      value: 'zh-CN'
    },
    {
      label: 'English (US)',
      value: 'en-US'
    },
    {
      label: 'English (GB)',
      value: 'en-GB'
    },
    {
      label: 'French',
      value: 'fr-FR'
    },
    {
      label: 'Spanish',
      value: 'es-ES'
    }
  ];

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  const renderForm = (formikBag: FormikProps<FormValues>) => (
    <Form>
      <Field
        className="custom-select"
        name="multiLanguages"
        options={languageOptions}
        component={CustomSelect}
        placeholder="Select multi languages..."
        isMulti={true}
      />
      <Button
        type="button"
        className="outline"
        onClick={formikBag.handleReset}
        disabled={!formikBag.dirty || formikBag.isSubmitting}
      >
        Reset
      </Button>
      <Button type="submit">Submit Form</Button>
    </Form>
  );

  return <Formik initialValues={defaultValues} render={renderForm} onSubmit={onSubmit} />;
}

export default function Signup() {
  return (
    <>
      <Head>
        <title>I2P</title>
      </Head>
      <main style={{ overflow: 'hidden' }}>
        <Template>
          <SignupForm />
        </Template>
      </main>
    </>
  );
}
