import "./Counter.css"
import { useState } from "react"

function Counter () {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(initialCount)

    return (
        <div className="Counter">
            <h1>{count}</h1>

            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            
        </div>
    )
}

export default Counter