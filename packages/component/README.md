# utterances-react

[![npm version](https://badge.fury.io/js/utterances-react.svg)](https://badge.fury.io/js/utterances-react)
[![GitHub version](https://badge.fury.io/gh/wicksome%2Futterances-react.svg)](https://badge.fury.io/gh/wicksome%2Futterances-react)

This is React component for [utterances][utterances]

## Install

```bash
# npm
$ npm i utterances-react
# yarn
$ yarn add utterances-react
```

## Usage

```js
import Utterances from "utterances-react"

export default ({ data }) => {
  return (
    <Utterances
      repo="wicksome/utterances-react"
      issueTerm="pathname"
      label=""
      theme="github-light"
      crossorigin="anonymous"
      async={false}
      style={`
        & .utterances {
          max-width: 950px;
        }
    `}
    />
  )
}
```

## License

MIT

[utterances]: https://utteranc.es/
