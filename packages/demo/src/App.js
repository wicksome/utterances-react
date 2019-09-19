import React from "react"
import Utterances from "utterances-react"

export default () => {
  return (
    <div>
      <center>
        <h2>
          <a href="https://github.com/wicksome/utterances-react">
            utterances-react
          </a>{" "}
          demo page
        </h2>
      </center>
      <Utterances
        repo="wicksome/utterances-react"
        style={`
          & .utterances {
            max-width: 950px; 
          }
        `}
      />
    </div>
  )
}
