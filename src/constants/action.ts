import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
} from 'ts-foursquare'
import { getType } from 'typesafe-actions'

interface IActionDescriptionMapping {
  [actionType: string]: string
}

export const ACTION_DESCRIPTION_MAPPING: IActionDescriptionMapping = {
  [getType(
    getVenuesCategoriesAsync.request
  )]: 'Returns a hierarchical list of categories applied to venues.',
  [getType(
    getVenuesExploreAsync.request
  )]: 'Returns a list of recommended venues near the current location. For more robust information about the venues themselves (photos/tips/etc.).',
  [getType(
    getVenuesSearchAsync.request
  )]: 'Returns a list of venues near the current location, optionally matching a search term.',
  [getType(
    getVenuesTrendingAsync.request
  )]: 'Returns a list of venues near the current location with the most people currently checked in. For more robust information about the venues themselves (photos/tips/etc.).',
}
