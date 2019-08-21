import React from 'react'
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FormikActions,
  FormikProps,
} from 'formik'
import * as Yup from 'yup'

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

interface IPayload {
  clientId: string
  clientSecret: string
}

interface IProps {
  onSubmit: (values: IPayload) => void
}

export class PutCredentialsForm extends React.Component<IProps> {
  render() {
    const { onSubmit } = this.props
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: IFormValues,
          actions: FormikActions<IFormValues>
        ) => {
          onSubmit(values)
          actions.setSubmitting(false)
        }}
        render={(formikBag: FormikProps<IFormValues>) => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">Credentials</p>

            <Field
              name="clientId"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <div>
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="clientId"
                  >
                    clientId
                  </label>
                  <input
                    {...field}
                    className={`w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                      form.errors.clientId ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="clientId"
                  />
                </div>
              )}
            />

            <Field
              name="clientSecret"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <div className="mt-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="clientSecret"
                  >
                    clientSecret
                  </label>
                  <input
                    {...field}
                    className={`w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                      form.errors.clientId ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="clientSecret"
                  />
                </div>
              )}
            />

            <div className="mt-4">
              <div className="flex justify-end">
                <button
                  className={`bg-white text-gray-800 font-bold rounded border-b-2${
                    !!Object.keys(formikBag.errors).length
                      ? ' bg-red-500 hover:border-red-600 '
                      : ' border-green-500 hover:border-green-600 hover:bg-green-500 '
                  }hover:text-white shadow-md py-2 px-6 inline-flex items-center`}
                  type="submit"
                >
                  <span className="mr-2">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentcolor"
                      d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Form>
        )}
      />
    )
  }
}
