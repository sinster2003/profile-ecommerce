import { atom } from "recoil";
import { TemplateType } from "../types";

const cartAtom = atom<TemplateType[]>({
    key: "cartAtom",
    default: []
});

export default cartAtom;