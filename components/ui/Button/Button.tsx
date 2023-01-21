import { ComponentPropsWithRef, FC, ReactNode } from "react";
import styles from './Button.module.scss';
import classnames from 'classnames'

interface IButtonProps extends ComponentPropsWithRef<'button'> {
    children: ReactNode;
    loading?: boolean;
}

export const Button: FC<IButtonProps> = (
  {
      children,
      className,
      type= 'button',
      disabled,
      loading,
      ...props
  }) => {

    const classes = classnames(
      styles.button,
      {
        [styles.disabled]: disabled,
        [styles.loading]: loading,
      },
      className
    )

    return (
        <button
          type={type}
          disabled={loading || disabled}
          className={classes}
          {...props}
        >
            {children}
        </button>
    );
};