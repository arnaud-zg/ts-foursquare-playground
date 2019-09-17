import { Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import { NRequest } from 'ts-foursquare/types/request'
import * as Yup from 'yup'
import { venues } from '../../../../../__mocks__/venues'
import { i18n } from '../../../../constants/i18n'
import { FormAsyncActions } from '../../FormAsyncActions'
import { Props } from './GetVenuesByPlaceForm.container'

const validationSchema = Yup.object().shape({
  near: Yup.string().required(),
})

export class GetVenuesByPlaceForm extends React.Component<Props> {
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
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (onSubmit) {
            onSubmit(values)
          }
          getVenuesSearchAsyncRequest(values)
          actions.setSubmitting(false)
        }}
        render={formikBag => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">
              Get venues search by place
            </p>

            <Field
              name="near"
              render={({
                field,
                form,
              }: FieldProps<NRequest.IVenuesSearchPayloadByPlace>) => (
                <div className="mt-2">
                  <label className="block text-sm text-gray-600" htmlFor="near">
                    near
                  </label>
                  <input
                    {...field}
                    className={`w-full px-5 py-2 text-gray-700 bg-gray-200 rounded${
                      form.errors.near ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="Ex: New York"
                  />
                </div>
              )}
            />

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
      />
    )
  }
}
