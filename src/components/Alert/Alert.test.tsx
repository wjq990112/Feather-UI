/**
 * @file Alert Test
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { AlertProps } from './Alert';

// 默认属性 测试 onClose 是否正常
const defaultProps: AlertProps = {
  title: 'title',
  content: 'content',
  onClose: jest.fn(),
};

describe('Test Alert Component', () => {
  it('Should render the correct default Alert', () => {
    const wrapper = render(<Alert {...defaultProps} />);
    const alertTitle = wrapper.getByText('title');
    expect(alertTitle).toBeInTheDocument();
    expect(alertTitle).toHaveClass('bold-title');
    const alertIcon = wrapper.getByText('×');
    fireEvent.click(alertIcon);
    expect(defaultProps.onClose).toHaveBeenCalled();
    expect(alertTitle).not.toBeInTheDocument();
  });
});
