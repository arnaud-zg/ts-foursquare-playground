import { storiesOf } from '@storybook/react'
import React from 'react'
import { Layout } from '../src/Layout'

storiesOf('1-Presentation/1-Project', module).add(
  '1-Welcome to the playground',
  () => {
    return (
      <Layout>
        <section className="shadow">
          <article className="border-b">
            <div className="border-l-2 bg-grey-lightest border-indigo">
              <div className="pl-8 pr-8 pb-5 pt-5 text-grey-darkest">
                <div>Coming soon</div>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    )
  }
)
