import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
} from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import {
  GetVenuesSearchForm,
  GetVenuesCategoriesForm,
} from '../../src/components/Forms'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const venuesActionsAsync = {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
}

Object.keys(venuesActionsAsync).forEach(actionAsyncName => {
  const venuesStories = storiesOf(
    `2-Module/Venues/Action/${actionAsyncName}`,
    module
  )

  switch (actionAsyncName) {
    case 'getVenuesCategoriesAsync':
      venuesStories.addDecorator(withRedux).add('Get venues categories', () => {
        return (
          <Layout>
            <Action
              actionCreator={venuesActionsAsync[actionAsyncName].request}
              renderFormPayload={() => <GetVenuesCategoriesForm />}
            />
          </Layout>
        )
      })
      break
    case 'getVenuesExploreAsync':
      venuesStories
        .addDecorator(withRedux)
        .add('Get venues explore by location', () => {
          const initialValues = { ll: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
        .add('Get venues explore by place', () => {
          const initialValues = { near: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
      break
    case 'getVenuesSearchAsync':
      venuesStories
        .addDecorator(withRedux)
        .add('Get venues search by location', () => {
          const initialValues = {
            ll: '',
            // NRequest.IVenuesSearchPayload
            ne: '',
            providerId: '',
            sw: '',
            url: '',
          }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
                renderFormPayload={() => (
                  <GetVenuesSearchForm initialValues={initialValues} />
                )}
              />
            </Layout>
          )
        })
        .add('Get venues search by query', () => {
          const initialValues = {
            query: '',
            // NRequest.IVenuesSearchPayload
            ne: '',
            providerId: '',
            sw: '',
            url: '',
          }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
                renderFormPayload={() => (
                  <GetVenuesSearchForm initialValues={initialValues} />
                )}
              />
            </Layout>
          )
        })
        .add('Get venues search by place', () => {
          const initialValues = {
            near: '',
            // NRequest.IVenuesSearchPayload
            ne: '',
            providerId: '',
            sw: '',
            url: '',
          }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
                renderFormPayload={() => (
                  <GetVenuesSearchForm initialValues={initialValues} />
                )}
              />
            </Layout>
          )
        })
      break
    case 'getVenuesTrendingAsync':
      venuesStories
        .addDecorator(withRedux)
        .add('Get venues trending by location', () => {
          const initialValues = { ll: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
        .add('Get venues trending by place', () => {
          const initialValues = { near: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
      break
    default:
      break
  }
})
