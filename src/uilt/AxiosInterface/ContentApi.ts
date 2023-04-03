import {Home} from './HomeInterface'
import {Search} from './SearchInterface'
import {Audio} from './AudioInterface'

export interface useAxios {
    Search: Search
    Home: Home
    Audio: Audio
}