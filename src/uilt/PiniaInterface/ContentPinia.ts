import {useHome} from './HomeInterface'
import {useSearch} from './SearchInterface'
import {useAudio} from "./Audiointerace";

export interface usePiniaStore {
    Home: useHome
    Playlist: []
    Singer: []
    Detail: []
    Login: []
    Start: []
    Audio: useAudio
    Mv: []
    Search: useSearch
}