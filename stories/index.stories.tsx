import { storiesOf } from '@storybook/react'
import React from 'react'
import { Layout } from '../src/Layout'

storiesOf('1-Presentation/Project', module).add(
  'Welcome to the playground',
  () => {
    return (
      <Layout>
        <section className="shadow">
          <article className="border-b">
            <div className="border-l-2 bg-grey-lightest border-indigo">
              <div className="pl-8 pr-8 pb-5 pt-5 text-grey-darkest">
                <h3 className="text-lg">How is this project useful?</h3>
                <p className="p-2">
                  I started to work on a project and I quickly notice that I
                  need an interface that gives me enough information about the
                  Foursquare API. So, I decided to write a library named
                  `ts-foursquare`, it suppose to help you with manipulate http
                  responses by giving type on each response.
                </p>
                <h3 className="text-lg">How does it work?</h3>
                <p className="p-2">
                  The easiest way is to use the standalone mode, if you want
                  more details{' '}
                  <a
                    href="https://github.com/arnaud-zg/ts-foursquare/blob/develop/docs/usage.md#getting-started"
                    target="_blank"
                  >
                    check the documentation
                  </a>
                  .
                </p>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    )
  }
)
