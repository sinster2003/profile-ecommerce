import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const currencyAtom = atom({
    key: "currencyAtom",
    default: "usd",
    effects_UNSTABLE: [persistAtom]
});

export default currencyAtom;