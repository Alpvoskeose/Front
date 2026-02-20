import React, { useSatate } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };
    return (
        <div style={{ padding: '20px', border: '1px solid black', marginTop: '20px'}}>
            <h2>Current Count: {count}</h2>
            <button onClick={incrementCount}>Увеличить</button>
            <button onClick={decrementCount}>Уменьшить</button>
        </div>
    )
}
export default Counter;