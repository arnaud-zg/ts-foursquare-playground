import { Form, Formik, FieldProps, Field } from 'formik'
import React from 'react'
import { venues } from '../../../../../__mocks__/venues'
import { i18n } from '../../../../constants/i18n'
import { FormAsyncActions } from '../../FormAsyncActions'
import { Props } from './GetVenuesSimilarForm.container'
import * as Yup from 'yup'
import { NRequest } from 'ts-foursquare/types'

const getValidationSchema = () =>
  Yup.object().shape({
    venueId: Yup.string().required(),
  })

export class GetVenuesSimilarForm extends React.Component<Props> {
  render() {
    const {
      initialValues,
      getVenuesSimilarAsyncCancel,
      getVenuesSimilarAsyncFailure,
      getVenuesSimilarAsyncRequest,
      getVenuesSimilarAsyncSuccess,
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
          getVenuesSimilarAsyncRequest(values)
          actions.setSubmitting(false)
        }}
      >
        {formikBag => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">Get venues search</p>
            {Object.keys(initialValues).map(fieldKey => (
              <Field key={fieldKey} name={fieldKey}>
                {({
                  field,
                  form: { errors },
                }: FieldProps<NRequest.TVenuesSearchPayload>) => (
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
                    getVenuesSimilarAsyncCancel(
                      i18n.ACTION_IS_CANCELLED_BY_USER
                    )
                  }}
                  onFailure={() => {
                    getVenuesSimilarAsyncFailure(new Error('Unknown error'))
                  }}
                  onSuccess={() => {
                    getVenuesSimilarAsyncSuccess(venues)
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
