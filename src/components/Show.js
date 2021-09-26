import React from 'react'

const show = (props) => {
    const {results,info} = props;
    return (
        <div className="show">
        <div style={{ 'color': "#bdc1c6" }}>
          {info ? `About ${info.totalResults} results (${info.formattedSearchTime} seconds)` : ""}
        </div>
        <br></br>
        {results.length > 0
          ? results.map((result) => (
            <div style={{ "marginLeft": "10%" }} key={result.cacheId}>
              <div className="show__details">
                <a href={result.displayLink} style={{ "textDecoration": "none", "lineHeight": "1.3"}}>
                <cite style={{ 'color':"#bdc1c6" }} className="citeclass">
                  {result.formattedUrl}
                </cite>
                </a>
                <div style={{ 'fontSize': '20px', "lineHeight": "1.3"}}>
                  <a href={result.link}>{result.title}</a>
                </div>
                <div className="show__description">
                  <p >{result.snippet}</p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
            ))
          : ""}
      </div>
    );
}

export default show
