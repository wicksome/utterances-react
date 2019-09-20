import React from "react"
import { storiesOf } from "@storybook/react"

import Utterances from "utterances-react"

storiesOf("utterances-react", module)
  .add("Utterances", () => <Utterances repo="wicksome/utterances-react" />)
