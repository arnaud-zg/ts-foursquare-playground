import { connect } from 'react-redux'
import { getVenuesLikesAsync } from 'ts-foursquare'
import { GetVenuesLikesForm as GetVenuesLikesFormComponent } from './GetVenuesLikesForm'
import { NRequest } from 'ts-foursquare/types'

interface ContainerProps {
  initialValues: NRequest.IVenuesLikesPayload
  onSubmit?: (values: NRequest.IVenuesLikesPayload) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesLikesAsyncCancel: getVenuesLikesAsync.cancel,
  getVenuesLikesAsyncFailure: getVenuesLikesAsync.failure,
  getVenuesLikesAsyncRequest: getVenuesLikesAsync.request,
  getVenuesLikesAsyncSuccess: getVenuesLikesAsync.success,
}

export const GetVenuesLikesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesLikesFormComponent)
