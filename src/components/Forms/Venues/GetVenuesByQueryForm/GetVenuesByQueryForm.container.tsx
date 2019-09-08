import { connect } from 'react-redux'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { GetVenuesByQueryForm as GetVenuesByQueryFormComponent } from './GetVenuesByQueryForm'
import { NRequest } from 'ts-foursquare/types/request'

interface ContainerProps {
  initialValues: NRequest.IVenuesSearchPayloadByQuery
  onSubmit?: (values: NRequest.IVenuesSearchPayloadByQuery) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesSearchAsyncRequest: getVenuesSearchAsync.request,
}

export const GetVenuesByQueryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesByQueryFormComponent)
