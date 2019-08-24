import { connect } from 'react-redux'
import { requestGetVenuesSearch } from 'ts-foursquare'
import { GetVenuesForm as GetVenuesFormComponent } from './GetVenuesForm'
import { NRequest } from 'ts-foursquare/types/request'

interface ContainerProps {
  onSubmit?: (values: NRequest.TVenuesSearchPayload) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  requestGetVenuesSearch,
}

export const GetVenuesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetVenuesFormComponent)
