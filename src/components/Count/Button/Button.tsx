import { useRecoilCountSetValue } from "../../../recoil/button";
import { useCallback } from "react";

export const RecoilButton = () => {
    const setCount = useRecoilCountSetValue();

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [setCount]);

    return (
        <div className="mt-10">
            <button onClick={increment} className="border-solid border-2 border-black">Recoil +1</button>
        </div>
    );
};
