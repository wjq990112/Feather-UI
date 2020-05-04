/**
 * @file Button
 */
import React from 'react';
import classNames from 'classnames';

// Button 尺寸
export type ButtonSize = 'large' | 'small';

// Button 类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// 定义 Button 属性类型
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  buttonType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

// 定义交叉类型
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

function Button(props: ButtonProps): JSX.Element {
  // 解构属性
  const {
    disabled,
    className,
    size,
    buttonType,
    href,
    children,
    ...restProps
  } = props;

  // 定义 class
  const classes = classNames('button', className, {
    [`button-${buttonType}`]: buttonType,
    [`button-${size}`]: size,
    disabled: buttonType === 'link' && disabled,
  });

  if (buttonType === 'link') {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  buttonType: 'default',
};

export default Button;
