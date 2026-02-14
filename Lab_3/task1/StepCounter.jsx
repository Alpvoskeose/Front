import React from 'react';
const StepCounter = ({initialValue = 0, step = 1}) => {
    const [count, setCount] =useState(initialValue);
    const [history, setHistory] = useState([]);
    const [ops, setOps] = useState(0);
    const handleChange = (newVal) =>
    {
        setCount(newVal);
        setHistory([...history, newVal]);
        setOps(ops + 1);       
    };

    const handleReset = () => {
        setCount(initiaValue);
        setHistory([]);
        setOps(0);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => handleChange(count + step)}>+{step}</button>
            <button onClick={() => handleChange(count - step)}>-{step}</button>
            <button onClick={handleReset}>Reset</button>
            
            {/*Стастистика*/}
            <p>Operations: {ops}</p>
            <p>History: {history.slice(-5).join(',')}</p>
        
        </div>
    );
};

export default StepCounter;