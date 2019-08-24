import { connect } from 'react-redux'
import {
  credentialsSelector,
  initialState,
  putCredentials,
} from 'ts-foursquare'
import { NResolve } from 'ts-foursquare/types/resolve'
import { PutCredentialsForm as PutCredentialsFormComponent } from './PutCredentialsForm'

interface ContainerProps {
  onSubmit?: (values: NResolve.ICredentialsPayload) => void
}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = (state: typeof initialState) => ({
  credentials: credentialsSelector(state),
})

const mapDispatchToProps = {
  putCredentials,
}

export const PutCredentialsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PutCredentialsFormComponent)
