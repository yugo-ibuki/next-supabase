import React from 'react';
import { useRecoilCountValue } from "../../../recoil/button";

export const RecoilDisplayCount: React.VFC = () => {
    const count = useRecoilCountValue();
    return <p>Recoil カウント: {count}</p>;
};
