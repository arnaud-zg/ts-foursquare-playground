import { Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { venues } from '../../../../../__mocks__/venues'
import { i18n } from '../../../../constants/i18n'
import { FormAsyncActions } from '../../FormAsyncActions'
import { Props } from './GetVenuesSearchForm.container'

const getValidationSchema = () =>
  Yup.object().shape({
    query: Yup.string(),
    ll: Yup.string(),
    near: Yup.string(),
    // NRequest.IVenuesSearchPayload
    ne: Yup.string(),
    providerId: Yup.string(),
    sw: Yup.string(),
    url: Yup.string(),
  })

export class GetVenuesSearchForm extends React.Component<Props> {
  render() {
    const {
      getVenuesSearchAsyncCancel,
      getVenuesSearchAsyncFailure,
      getVenuesSearchAsyncRequest,
      getVenuesSearchAsyncSuccess,
      initialValues,
      onSubmit,
    } = this.props
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={(values, actions) => {
          if (onSubmit) {
            onSubmit(values)
          }
          getVenuesSearchAsyncRequest(values)
          actions.setSubmitting(false)
        }}
      >
        {formikBag => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">Get venues search</p>
            {Object.keys(initialValues).map(fieldKey => (
              <Field key={fieldKey} name={fieldKey}>
                {({ field, form: { errors } }: FieldProps) => (
                  <div className="mt-2">
                    <label
                      className="block text-sm text-gray-600"
                      htmlFor={fieldKey}
                    >
                      {fieldKey}
                    </label>
                    <input
                      {...field}
                      className={`w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                        (errors as any)[fieldKey]
                          ? ' border border-red-600'
                          : ''
                      }`}
                      type="text"
                      placeholder={`${i18n.ACTION_EXAMPLE}Text`}
                    />
                  </div>
                )}
              </Field>
            ))}

            <div className="mt-4">
              <div className="flex flex-wrap justify-end">
                <FormAsyncActions
                  hasError={!!Object.keys(formikBag.errors).length}
                  onCancel={() => {
                    getVenuesSearchAsyncCancel(i18n.ACTION_IS_CANCELLED_BY_USER)
                  }}
                  onFailure={() => {
                    getVenuesSearchAsyncFailure(new Error('Unknown error'))
                  }}
                  onSuccess={() => {
                    getVenuesSearchAsyncSuccess(venues)
                  }}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}
