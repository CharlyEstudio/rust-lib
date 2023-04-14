import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { MySum } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MySum n1={2} n2={3} />)
  })
})
