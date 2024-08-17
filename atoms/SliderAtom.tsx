import { atom } from "recoil";

const sliderAtom = atom<number>({
    key: "sliderAtom",
    default: 0
});

export default sliderAtom;