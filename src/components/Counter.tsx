// 클라이언트 사이드에서 사용하는 코드임을 나타낸다 -> 꼭 작성하지 않아도 됨
'use client';

import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount((num) => num + 1)}>숫자 증가 시키기</button>
        </>
    )
} 