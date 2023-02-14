import React from 'react'

function Finder() {

    const [quote, setQuote] = React.useState("Click the button to get started!")

    React.useEffect(() => {
        fetch("https://animechan.vercel.app/api/random")
            .then((response) => response.json())
            .then((quote) => setQuote(quote))
    }, [])

    function handleClick() {
            window.location.reload(false);
            console.log(quote)
    
    }

    return (
        <div className="finder-div">
            <h3>Random Anime Quote:</h3>
                <h4>{quote.quote}</h4>
                <h5><em>{quote.character} - {quote.anime}</em></h5>

                <button onClick={handleClick}>New Quote!</button>
        </div>
    )
}

export default Finder