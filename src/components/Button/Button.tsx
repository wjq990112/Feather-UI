/**
 * @file Button
 */
import React from 'react';
import classNames from 'classnames';

// Button 尺寸
export type ButtonSize = 'large' | 'small';

// Button 类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// Button 属性接口
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  buttonType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

// 交叉类型
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

// ButtonProps 类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
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

  // className
  const classes = classNames('button', className, {
    [`button-${buttonType}`]: buttonType,
    [`button-${size}`]: size,
    disabled: buttonType === 'link' && disabled
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
};

// 属性默认值
Button.defaultProps = {
  disabled: false,
  buttonType: 'default'
};

export default Button;
