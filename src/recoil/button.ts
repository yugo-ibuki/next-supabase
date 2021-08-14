import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const countAtom = atom<number>({
    key: "countAtom",
    default: 0,
});

export const useRecoilCountValue = () => useRecoilValue(countAtom);
export const useRecoilCountSetValue = () => useSetRecoilState(countAtom);
