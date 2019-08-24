import { connect } from 'react-redux'
import { credentialsSelector, initialState } from 'ts-foursquare'
import { Life as LifeComponent } from './Life'

const mapStateToProps = (state: typeof initialState) => ({
  credentials: credentialsSelector(state),
  life: state.life,
})

const mapDispatchToProps = {}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

export const Life = connect(
  mapStateToProps,
  mapDispatchToProps
)(LifeComponent)
