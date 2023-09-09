import { useState } from "react"

export default function Counter() {
    // const abc = useState(0);
    const [count, setCount] = useState(0);
    // console.log(abc[1]);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        // const newReduce = count - 1;
        setCount(count - 1)
    }
    return (
        <div style={{ border: '2px solid red ', padding: '12px', borderRadius: '15px' }}>
            <h3> Counter : {count} </h3>
            <button onClick={handleAdd}> Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}