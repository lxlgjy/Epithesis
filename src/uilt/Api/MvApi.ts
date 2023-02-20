import {publicGetFunction} from "../Axios";

import useStore from "../../stores/counter";

export const MvAxios =async () => {
    const newMv =await publicGetFunction(`/mv/first?limit=2`).then()
    const WYMv =await publicGetFunction(`/mv/exclusive/rcmd?limit=8`).then()
    let MvList = {
        newMv,
        WYMv
    }
    useStore().Mv.getMvList(MvList)
}