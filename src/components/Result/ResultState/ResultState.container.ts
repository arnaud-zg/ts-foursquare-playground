import { connect } from 'react-redux'
import { TState } from 'ts-foursquare/dist/reducers/app.d'
import { ResultState as ResultStateComponent } from './ResultState'

const mapStateToProps = (state: TState, ownProps: ContainerProps) => {
  const { selectors } = ownProps

  return {
    resultsState: Object.keys(selectors).reduce((acc, selectorKey) => {
      const selector = selectors[selectorKey]
      return {
        ...acc,
        [selectorKey]: selector(state),
      }
    }, {}),
  }
}

const mapDispatchToProps = {}

export interface ContainerProps {
  selectors: { [selectorName: string]: (state: TState) => any }
}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  ContainerProps

export const ResultState = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultStateComponent)
