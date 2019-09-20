import { connect } from 'react-redux'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { NRequest } from 'ts-foursquare/types/request'
import { GetVenuesSearchForm as GetVenuesSearchFormComponent } from './GetVenuesSearchForm'

interface ContainerProps {
  initialValues: NRequest.TVenuesSearchPayload
  onSubmit?: (values: NRequest.TVenuesSearchPayload) => void
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

export const GetVenuesSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesSearchFormComponent)
