import { i18n } from '../i18n'

describe('i18n', () => {
  it('should make a snapshot', () => {
    expect(i18n).toMatchSnapshot()
  })
})
