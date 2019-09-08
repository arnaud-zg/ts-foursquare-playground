import { Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Props } from './GetVenuesByPlaceForm.container'
import { Button, EIconType } from '../../../Button'
import { i18n } from '../../../../constants/i18n'
import { NRequest } from 'ts-foursquare/types/request'

const validationSchema = Yup.object().shape({
  query: Yup.string().required(),
})

export class GetVenuesByPlaceForm extends React.Component<Props> {
  render() {
    const { initialValues, onSubmit, getVenuesSearchAsyncRequest } = this.props
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
              }: FieldProps<NRequest.IVenuesSearchPayloadByPlace>) => (
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
                      form.errors.near ? ' border border-red-600' : ''
                    }`}
                    type="text"
                    placeholder="Ex: Steak House"
                  />
                </div>
              )}
            />

            <div className="mt-4">
              <div className="flex flex-wrap justify-end">
                <Button className="mt-2" disabled={true} label="Reset" />
                <Button
                  className="mt-2 ml-2"
                  hasError={!!Object.keys(formikBag.errors).length}
                  iconType={EIconType.ARROW_RIGHT}
                  label={i18n.REQUEST}
                  type="submit"
                />
                <Button className="mt-2 ml-2" disabled={true} label="Success" />
                <Button
                  className="mt-2 ml-2 w-2/5"
                  disabled={true}
                  label="Cancel"
                />
                <Button
                  className="mt-2 ml-2 w-2/5"
                  disabled={true}
                  label="Failure"
                />
              </div>
            </div>
          </Form>
        )}
      />
    )
  }
}
