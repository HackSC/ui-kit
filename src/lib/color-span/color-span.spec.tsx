import { render } from '@testing-library/react';
import React from 'react';

import ColorSpan from './color-span';

describe('ColorSpan', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorSpan />);
    expect(baseElement).toBeTruthy();
  });
});
