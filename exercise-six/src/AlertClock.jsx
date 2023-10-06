export function AlertClock() {
    return <button onClick={handleButtonClick}> Current Time </button>
}

function handleButtonClick() {
    const time = new Date();
    alert ( `The current time is: ${time.toLocaleTimeString()}` )
}