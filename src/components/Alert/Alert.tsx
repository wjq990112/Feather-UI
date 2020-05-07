/**
 * @file Alert
 */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

// Alert 类型
type AlertType = 'success' | 'default' | 'danger' | 'warning';

// Alert 属性接口
export interface AlertProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  alertType?: AlertType;
  closable?: boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  const [visible, setVisible] = useState(true);

  function handleClose(e: React.MouseEvent) {
    if (onClose) {
      onClose();
    }
    setVisible(false);
    console.log(visible);
  }

  // 解构属性
  const { title, content, alertType, closable, onClose } = props;

  // className
  const classes = classNames('alert', {
    [`alert-${alertType}`]: alertType,
  });

  return (
    <Transition in={visible} timeout={300}>
      <div className={classes}>
        {title && <span className="bold-title">{title}</span>}
        {content && <div className="alert-content">{content}</div>}
        {closable && (
          <span className="alert-close" onClick={handleClose}>
            ×
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  alertType: 'default',
  closable: true,
  title: <div>&nbsp;</div>,
  content: <div>&nbsp;</div>,
};

export default Alert;
