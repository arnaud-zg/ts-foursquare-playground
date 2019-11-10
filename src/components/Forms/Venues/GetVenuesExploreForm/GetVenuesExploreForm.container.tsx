import { connect } from 'react-redux'
import { getVenuesExploreAsync } from 'ts-foursquare'
import { GetVenuesExploreForm as GetVenuesExploreFormComponent } from './GetVenuesExploreForm'
import { NRequest } from 'ts-foursquare/types'

interface ContainerProps {
  initialValues: NRequest.TVenuesExplorePayload
  onSubmit?: (values: NRequest.TVenuesExplorePayload) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesExploreAsyncCancel: getVenuesExploreAsync.cancel,
  getVenuesExploreAsyncFailure: getVenuesExploreAsync.failure,
  getVenuesExploreAsyncRequest: getVenuesExploreAsync.request,
  getVenuesExploreAsyncSuccess: getVenuesExploreAsync.success,
}

export const GetVenuesExploreForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesExploreFormComponent)
