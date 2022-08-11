
export const Feedback = ({stats:{good, neutral, bad}}) => {
    return (
        <>
        <div>
            <h1>Please leave feedback</h1>
            <div>
                <button type="button" >Good</button>
                <button type="button" >Neutral</button>
                <button type="button" >Bad</button>
            </div>
        </div>
        <div>
            <h2>Statistics</h2>
                <ul>
                    
                    <li>Good:{good}</li>
                    <li>Neutral:{neutral}</li>
                    <li>Bad:{bad}</li>
            </ul>
        </div>
        </>
    )
}