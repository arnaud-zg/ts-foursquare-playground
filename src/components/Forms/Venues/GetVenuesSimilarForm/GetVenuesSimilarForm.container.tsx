import { connect } from 'react-redux'
import { getVenuesSimilarAsync } from 'ts-foursquare'
import { GetVenuesSimilarForm as GetVenuesSimilarFormComponent } from './GetVenuesSimilarForm'
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
  getVenuesSimilarAsyncCancel: getVenuesSimilarAsync.cancel,
  getVenuesSimilarAsyncFailure: getVenuesSimilarAsync.failure,
  getVenuesSimilarAsyncRequest: getVenuesSimilarAsync.request,
  getVenuesSimilarAsyncSuccess: getVenuesSimilarAsync.success,
}

export const GetVenuesSimilarForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesSimilarFormComponent)
