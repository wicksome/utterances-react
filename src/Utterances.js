import React, { useEffect } from "react"

export const Utterances = ({ repo }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const utterances = document.createElement("script")
    const config = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": "pathname",
      label: "🏷",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true,
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
      css={{
        "& .utterances": {
          maxWidth: "950px",
        },
      }}
    />
  )
}

export default Utterances
