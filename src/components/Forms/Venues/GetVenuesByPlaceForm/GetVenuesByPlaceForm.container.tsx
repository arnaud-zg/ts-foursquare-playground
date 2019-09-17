import { connect } from 'react-redux'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { NRequest } from 'ts-foursquare/types/request'
import { GetVenuesByPlaceForm as GetVenuesByPlaceFormComponent } from './GetVenuesByPlaceForm'

interface ContainerProps {
  initialValues: NRequest.IVenuesSearchPayloadByPlace
  onSubmit?: (values: NRequest.IVenuesSearchPayloadByPlace) => void
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

export const GetVenuesByPlaceGeocode = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesByPlaceFormComponent)
