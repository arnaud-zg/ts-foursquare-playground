import { Form, Formik } from 'formik'
import React from 'react'
import { categories } from '../../../../../__mocks__/categories'
import { i18n } from '../../../../constants/i18n'
import { FormAsyncActions } from '../../FormAsyncActions'
import { Props } from './GetVenuesCategoriesForm.container'

export class GetVenuesCategoriesForm extends React.Component<Props> {
  render() {
    const {
      getVenuesCategoriesAsyncCancel,
      getVenuesCategoriesAsyncFailure,
      getVenuesCategoriesAsyncRequest,
      getVenuesCategoriesAsyncSuccess,
      onSubmit,
    } = this.props
    return (
      <Formik
        initialValues={{}}
        onSubmit={(_values, actions) => {
          if (onSubmit) {
            onSubmit()
          }
          getVenuesCategoriesAsyncRequest()
          actions.setSubmitting(false)
        }}
      >
        {formikBag => (
          <Form className="max-w-xl m-2">
            <p className="mt-4 text-gray-800 font-medium">Get venues search</p>
            <div className="mt-4">
              <div className="flex flex-wrap justify-end">
                <FormAsyncActions
                  hasError={!!Object.keys(formikBag.errors).length}
                  onCancel={() => {
                    getVenuesCategoriesAsyncCancel(
                      i18n.ACTION_IS_CANCELLED_BY_USER
                    )
                  }}
                  onFailure={() => {
                    getVenuesCategoriesAsyncFailure(new Error('Unknown error'))
                  }}
                  onSuccess={() => {
                    getVenuesCategoriesAsyncSuccess(categories)
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
