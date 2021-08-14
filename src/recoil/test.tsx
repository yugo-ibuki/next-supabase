import { useCallback } from "react";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

const countAtom = atom<number>({
    key: "countAtom",
    default: 0,
});

const useRecoilCountValue = () => useRecoilValue(countAtom);
const useRecoilCountSetValue = () => useSetRecoilState(countAtom);

const RecoilButton = () => {
    const setCount = useRecoilCountSetValue();
    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [setCount]);

    return (
        <div>
            <button onClick={increment}>Recoil +1</button>
        </div>
    );
};

const RecoilDisplayCount = () => {
    const count = useRecoilCountValue();
    return <p>Recoil カウント: {count}</p>;
};

const App = () => {
    return (
        <div className="App">
            <RecoilDisplayCount />
            <RecoilButton />
        </div>
    );
};

const Root = () => {
    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    );
};

export default Root;
