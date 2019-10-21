import { connect } from 'react-redux'
import { getVenuesCategoriesAsync } from 'ts-foursquare'
import { GetVenuesCategoriesForm as GetVenuesCategoriesFormComponent } from './GetVenuesCategoriesForm'

interface ContainerProps {
  onSubmit?: () => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  getVenuesCategoriesAsyncCancel: getVenuesCategoriesAsync.cancel,
  getVenuesCategoriesAsyncFailure: getVenuesCategoriesAsync.failure,
  getVenuesCategoriesAsyncRequest: getVenuesCategoriesAsync.request,
  getVenuesCategoriesAsyncSuccess: getVenuesCategoriesAsync.success,
}

export const GetVenuesCategoriesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesCategoriesFormComponent)
