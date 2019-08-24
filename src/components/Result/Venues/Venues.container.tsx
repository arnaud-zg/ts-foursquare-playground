import { connect } from 'react-redux'
import { venuesSelector, initialState } from 'ts-foursquare'
import { Venues as VenuesComponent } from './Venues'

const mapStateToProps = (state: typeof initialState) => ({
  venues: venuesSelector(state),
})

const mapDispatchToProps = {}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

export const Venues = connect(
  mapStateToProps,
  mapDispatchToProps
)(VenuesComponent)
