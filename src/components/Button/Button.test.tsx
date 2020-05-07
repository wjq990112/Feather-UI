/**
 * @file Button Test
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

// 默认属性 使用 jest 提供的 mock 函数 测试 onClick 是否正常
const defaultProps: ButtonProps = {
  onClick: jest.fn(),
};

// 自定义属性 测试自定义的属性是否正常
const testProps: ButtonProps = {
  buttonType: 'primary',
  size: 'large',
  className: 'class',
};

// link 属性 测试 LinkButton 是否正常
const linkProps: ButtonProps = {
  buttonType: 'link',
  href: 'https://jack-wjq.cn',
  target: '_blank',
};

// disabled 属性 测试 disabled 是否正常
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('Test Button Component', () => {
  it('Should render the correct default Button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const button = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.tagName).toEqual('BUTTON');
    expect(button.disabled).toBeFalsy();
    expect(button).toHaveClass('button button-default');
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('Should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const button = wrapper.getByText('Nice');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button-primary button-large class');
  });

  it('Should render a Link when buttonType equals link and href is provided', () => {
    const wrapper = render(<Button {...linkProps}>Link</Button>);
    const button = wrapper.getByText('Link');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toEqual('A');
    expect(button).toHaveClass('button-link');
  });

  it('Should render disabled Button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const button = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeTruthy();
    fireEvent.click(button);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
