import {useHome} from './HomeInterface'
import {useSearch} from './SearchInterface'

export interface usePiniaStore {
    Home: useHome
    Playlist: []
    Singer: []
    Detail: []
    Login: []
    Start: []
    Audio: []
    Mv: []
    Search: useSearch
}