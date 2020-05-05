import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

// 创建默认属性 使用 jest 提供的 mock 函数 测试 onClick 是否正常
const defaultProps = {
  onClick: jest.fn(),
};

// 创建自定义属性 测试自定义的属性是否正常
const testProps: ButtonProps = {
  buttonType: 'primary',
  size: 'large',
  className: 'class',
};

// 创建 link 属性 测试 LinkButton 是否正常
const linkProps: ButtonProps = {
  buttonType: 'link',
  href: 'https://jack-wjq.cn',
  target: '_blank',
};

// 创建 disabled 属性 测试 disabled 是否正常
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('Test Button Component', () => {
  it('Should render the correct default Button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeFalsy();
    expect(element).toHaveClass('button button-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('Should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('button-primary button-large class');
  });
  it('Should render a Link when buttonType equals link and href is provided', () => {
    const wrapper = render(<Button {...linkProps}>Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('button-link');
  });
  it('Should render disabled Button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
