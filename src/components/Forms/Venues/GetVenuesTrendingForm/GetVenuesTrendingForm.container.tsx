import { connect } from 'react-redux'
import { getVenuesTrendingAsync } from 'ts-foursquare'
import { GetVenuesTrendingForm as GetVenuesTrendingFormComponent } from './GetVenuesTrendingForm'
import { NRequest } from 'ts-foursquare/types'

interface ContainerProps {
  initialValues: NRequest.TVenuesTrendingPayload
  onSubmit?: (values: NRequest.TVenuesTrendingPayload) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesTrendingAsyncCancel: getVenuesTrendingAsync.cancel,
  getVenuesTrendingAsyncFailure: getVenuesTrendingAsync.failure,
  getVenuesTrendingAsyncRequest: getVenuesTrendingAsync.request,
  getVenuesTrendingAsyncSuccess: getVenuesTrendingAsync.success,
}

export const GetVenuesTrendingForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesTrendingFormComponent)
