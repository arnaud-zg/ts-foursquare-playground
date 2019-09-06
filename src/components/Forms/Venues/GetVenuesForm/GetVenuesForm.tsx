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
import { Button, EIconType } from '../../../Button'

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
    const { onSubmit, getVenuesSearchAsyncRequest } = this.props
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
          getVenuesSearchAsyncRequest(values)
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
