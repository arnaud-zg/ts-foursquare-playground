import { connect } from 'react-redux'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { NRequest } from 'ts-foursquare/types/request'
import { GetVenuesByQueryForm as GetVenuesByQueryFormComponent } from './GetVenuesByQueryForm'

interface ContainerProps {
  initialValues: NRequest.IVenuesSearchPayloadByQuery
  onSubmit?: (values: NRequest.IVenuesSearchPayloadByQuery) => void
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

export const GetVenuesByQueryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesByQueryFormComponent)
