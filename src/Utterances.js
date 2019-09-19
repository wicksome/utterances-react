import React, { useEffect } from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const Utterances = ({
  repo,
  issueTerm = "pathname",
  label = "",
  theme = "github-light",
  crossOrigin: crossorigin = "anonymous",
  async = true,
}) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const utterances = document.createElement("script")
    const config = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": issueTerm,
      label,
      theme,
      crossorigin,
      async,
    }

    Object.keys(config).forEach(key => {
      utterances.setAttribute(key, config[key])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return (
    <div
      id="utterances_container"
      ref={rootElm}
      css={css`
        & .utterances {
          maxwidth: 950px;
        }
      `}
    />
  )
}

export default Utterances
