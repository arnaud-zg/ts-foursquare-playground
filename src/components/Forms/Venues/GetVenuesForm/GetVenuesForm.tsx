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
import { Props } from './GetVenuesForm.container'

const initialValues = {
  query: '',
}

const validationSchema = Yup.object().shape({
  query: Yup.string().required(),
})

interface IFormValues {
  query: string
}

export class GetVenuesForm extends React.Component<Props> {
  render() {
    const { onSubmit, requestGetVenuesSearch } = this.props
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
          requestGetVenuesSearch(values)
          actions.setSubmitting(false)
        }}
        render={(formikBag: FormikProps<IFormValues>) => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">Get venues</p>

            <Field
              name="query"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <div>
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="query"
                  >
                    query
                  </label>
                  <input
                    {...field}
                    className={`w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                      form.errors.query ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="Ex: Steak House"
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
