import React from 'react'
import { i18n } from '../../../constants/i18n'
import { Button, EIconType } from '../../Button'

interface IProps {
  hasError: boolean
  onCancel?: () => void
  onFailure?: () => void
  onRequest?: () => void
  onReset?: () => void
  onSuccess?: () => void
}

export class FormAsyncActions extends React.Component<IProps> {
  render() {
    const {
      hasError,
      onCancel,
      onFailure,
      onRequest,
      onReset,
      onSuccess,
    } = this.props

    return (
      <React.Fragment>
        <Button
          className="mt-2"
          disabled={!onReset}
          label={i18n.RESET}
          onClick={onReset}
        />
        <Button
          className="mt-2 ml-2"
          disabled={false}
          hasError={hasError}
          iconType={EIconType.ARROW_RIGHT}
          label={i18n.REQUEST}
          onClick={onRequest}
          type="submit"
        />
        <Button
          className="mt-2 ml-2"
          disabled={!onSuccess}
          label={i18n.SUCCESS}
          onClick={onSuccess}
        />
        <Button
          className="mt-2 ml-2"
          disabled={!onCancel}
          label={i18n.CANCEL}
          onClick={onCancel}
        />
        <Button
          className="mt-2 ml-2"
          disabled={!onFailure}
          label={i18n.FAILURE}
          onClick={onFailure}
        />
      </React.Fragment>
    )
  }
}
