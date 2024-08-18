import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const paidAtom = atom({
    key: "paidAtom",
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export default paidAtom;