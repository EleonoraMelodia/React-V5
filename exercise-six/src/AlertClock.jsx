export function AlertClock() {
    return <button onClick={buttonClicked}> Current Time </button>
}

function handleButtonClick() {
    const time = new Date();
    alert ( `The current time is: ${time.toLocaleTimeString()}` )
}