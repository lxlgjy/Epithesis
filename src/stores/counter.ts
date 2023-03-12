import useHomeStore from "./Home";
import usePlayListStore from "./PlayList";
import useSingerStore from "./Singer";
import useDetailStore from './Detail'
import useLoginStore from './Login'
import useStartStore from "./Initialstart";
import useAudioStore from "./Audio";
import useMvStore from "./Mv";
import useSearchStore from "./Search";
import useSettingStore from "./Setting";

export default function useStore() {
    return {
        Home: useHomeStore(),
        Playlist: usePlayListStore(),
        Singer: useSingerStore(),
        Detail: useDetailStore(),
        Login: useLoginStore(),
        Start: useStartStore(),
        Audio: useAudioStore(),
        Mv: useMvStore(),
        Search: useSearchStore(),
        Setting: useSettingStore(),
    };
}




