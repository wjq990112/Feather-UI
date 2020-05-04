/**
 * @file Button
 */
import React from 'react';
import classNames from 'classnames';

// Button 尺寸
export enum ButtonSize {
  Large = 'large',
  Small = 'small',
}

// Button 类型
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

// 定义 Button 属性类型
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children?: React.ReactNode;
}

function Button(props: BaseButtonProps) {
  // 解构属性
  const { disabled, size, type, href, children } = props;

  // 定义 class
  const classes = classNames('button', {
    [`button-${type}`]: type,
    [`button-${size}`]: size,
    disabled: type === ButtonType.Link && disabled,
  });

  if (type === ButtonType.Link) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default,
};

export default Button;
