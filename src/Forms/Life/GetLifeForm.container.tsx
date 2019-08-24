import { connect } from 'react-redux'
import { initialState, getLife } from 'ts-foursquare'
import { GetLifeForm as GetLifeFormComponent } from './GetLifeForm'

interface ContainerProps {}

export type Props = ContainerProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const mapStateToProps = (state: typeof initialState) => ({
  life: state.life,
})

const mapDispatchToProps = {
  getLife,
}

export const GetLifeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetLifeFormComponent)
