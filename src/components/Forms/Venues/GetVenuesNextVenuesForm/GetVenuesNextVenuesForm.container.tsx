import { connect } from 'react-redux'
import { getVenuesNextVenuesAsync } from 'ts-foursquare'
import { GetVenuesNextVenuesForm as GetVenuesNextVenuesFormComponent } from './GetVenuesNextVenuesForm'
import { NRequest } from 'ts-foursquare/types'

interface ContainerProps {
  initialValues: NRequest.IVenuesNextVenuesPayload
  onSubmit?: (values: NRequest.IVenuesNextVenuesPayload) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesNextVenuesAsyncCancel: getVenuesNextVenuesAsync.cancel,
  getVenuesNextVenuesAsyncFailure: getVenuesNextVenuesAsync.failure,
  getVenuesNextVenuesAsyncRequest: getVenuesNextVenuesAsync.request,
  getVenuesNextVenuesAsyncSuccess: getVenuesNextVenuesAsync.success,
}

export const GetVenuesNextVenuesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesNextVenuesFormComponent)
