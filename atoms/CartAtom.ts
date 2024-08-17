import { atom } from "recoil";
import { TemplateType } from "../types";
import { recoilPersist } from "recoil-persist";

const persistCart = recoilPersist();

const cartAtom = atom<TemplateType[]>({
    key: "cartAtom",
    default: [],
    effects_UNSTABLE: [persistCart.persistAtom]
});

export default cartAtom;