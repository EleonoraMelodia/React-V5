export function Counter({counter, handleCounter}) {
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounter}>Increment the number </button>
        </div>
    )
}
