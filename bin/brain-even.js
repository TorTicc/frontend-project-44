#!/usr/bin/env node

import isEven from '../src/even-games.js'
import main from '../src/cli.js'
const name = main()
isEven(name)
