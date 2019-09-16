import { Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import { NRequest } from 'ts-foursquare/types/request'
import * as Yup from 'yup'
import { i18n } from '../../../../constants/i18n'
import { FormAsyncActions } from '../../FormAsyncActions'
import { Props } from './GetVenuesByQueryForm.container'

const validationSchema = Yup.object().shape({
  query: Yup.string().required(),
})

export class GetVenuesByQueryForm extends React.Component<Props> {
  render() {
    const {
      getVenuesSearchAsyncCancel,
      getVenuesSearchAsyncRequest,
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
              Get venues search by query
            </p>

            <Field
              name="query"
              render={({
                field,
                form,
              }: FieldProps<NRequest.IVenuesSearchPayloadByQuery>) => (
                <div className="mt-2">
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
              <div className="flex flex-wrap justify-end">
                <FormAsyncActions
                  hasError={!!Object.keys(formikBag.errors).length}
                  onCancel={() => {
                    getVenuesSearchAsyncCancel(i18n.ACTION_IS_CANCELLED_BY_USER)
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
