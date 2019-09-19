import React, { useEffect } from "react"
import { css } from "emotion"

export default ({
  repo,
  issueTerm = "pathname",
  label = "",
  theme = "github-light",
  crossorigin = "anonymous",
  async = true,
  style = "",
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
      className={css`
        ${style}
      `}
    />
  )
}
