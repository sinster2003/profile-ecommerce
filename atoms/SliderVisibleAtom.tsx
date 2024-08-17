import { atom } from "recoil";

const sliderVisibleAtom = atom<boolean>({
    key: "sliderVisibleAtom",
    default: true
});

export default sliderVisibleAtom;