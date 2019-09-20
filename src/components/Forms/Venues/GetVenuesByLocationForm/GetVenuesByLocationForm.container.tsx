import { connect } from 'react-redux'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { NRequest } from 'ts-foursquare/types/request'
import { GetVenuesByLocationForm as GetVenuesByLocationFormComponent } from './GetVenuesByLocationForm'

interface ContainerProps {
  initialValues: NRequest.IVenuesSearchPayloadByLocation
  onSubmit?: (values: NRequest.IVenuesSearchPayloadByLocation) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesSearchAsyncCancel: getVenuesSearchAsync.cancel,
  getVenuesSearchAsyncFailure: getVenuesSearchAsync.failure,
  getVenuesSearchAsyncRequest: getVenuesSearchAsync.request,
  getVenuesSearchAsyncSuccess: getVenuesSearchAsync.success,
}

export const GetVenuesByLocationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesByLocationFormComponent)
