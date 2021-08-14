import { useCallback } from "react";
import { useRecoilCountSetValue } from "../recoil/button";

export const useIncrement = () => {
    const setCount = useRecoilCountSetValue();

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [setCount]);

    return increment
}
