import { connect } from 'react-redux'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { GetVenuesByPlaceForm as GetVenuesByPlaceFormComponent } from './GetVenuesByPlaceForm'
import { NRequest } from 'ts-foursquare/types/request'

interface ContainerProps {
  initialValues: NRequest.IVenuesSearchPayloadByPlace
  onSubmit?: (values: NRequest.IVenuesSearchPayloadByPlace) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesSearchAsyncRequest: getVenuesSearchAsync.request,
}

export const GetVenuesByPlaceGeocode = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesByPlaceFormComponent)
