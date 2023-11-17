import {render, screen} from '@testing-library/react';
import { Button } from '..';

const children = 'Click'

describe('Button component test', () => {
  test('Render button', () => {
    render(<Button>{children}</Button>)
    expect(screen.getByText('Click')).toBeInTheDocument()
  })
})