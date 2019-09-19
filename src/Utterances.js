import React, { useEffect } from "react"
import { css } from "@emotion/core"

export default ({
  repo,
  issueTerm = "pathname",
  label = "",
  theme = "github-light",
  crossorigin = "anonymous",
  async = true,
}) => {
  const rootElm = React.createRef()

  console.log("# utterances config")
  console.log("repo", repo)
  console.log("issueTerm", issueTerm)
  console.log("label", label)
  console.log("theme", theme)
  console.log("crossorigin", crossorigin)
  console.log("async", async)

  useEffect(() => {
    const utterances = document.createElement("script")
    const config = {
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
        & .utterances {
          maxwidth: 950px;
        }
      `}
    />
  )
}
