import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikActions,
  FormikProps,
} from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Props } from './PutCredentialsForm.container'
import { Button, EIconType } from '../../../Button'

const initialValues = {
  clientId: '',
  clientSecret: '',
}

const validationSchema = Yup.object().shape({
  clientId: Yup.string().required(),
  clientSecret: Yup.string().required(),
})

interface IFormValues {
  clientId: string
  clientSecret: string
}

export class PutCredentialsForm extends React.Component<Props> {
  render() {
    const { onSubmit, putCredentials } = this.props
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: IFormValues,
          actions: FormikActions<IFormValues>
        ) => {
          if (onSubmit) {
            onSubmit(values)
          }
          putCredentials(values)
          actions.setSubmitting(false)
        }}
        render={(formikBag: FormikProps<IFormValues>) => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">Credentials</p>

            <Field
              name="clientId"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <div className="mt-4 ml-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="clientId"
                  >
                    clientId
                  </label>
                  <input
                    {...field}
                    className={`mt-2 w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                      form.errors.clientId ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="Ex: 1234"
                  />
                </div>
              )}
            />

            <Field
              name="clientSecret"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <div className="mt-4 ml-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="clientSecret"
                  >
                    clientSecret
                  </label>
                  <input
                    {...field}
                    className={`mt-2 w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                      form.errors.clientId ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="Ex: 1234"
                  />
                </div>
              )}
            />

            <div className="mt-4">
              <div className="flex justify-end">
                <Button
                  hasError={!!Object.keys(formikBag.errors).length}
                  iconType={EIconType.ARROW_RIGHT}
                  label="Send"
                  type="submit"
                />
              </div>
            </div>
          </Form>
        )}
      />
    )
  }
}
