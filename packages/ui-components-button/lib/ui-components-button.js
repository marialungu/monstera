import React from 'react';
import cx from 'clsx';
import styles from './styles.css'

const Button = ({ children, className, type, size, onClick, disabled, fullWidth, ...rest }) => {
    const classes = cx(
        styles.Button,
        {
            [styles.ButtonSecondary]: type === 'secondary',
            [styles.ButtonTertiary]: type === 'tertiary',
            [styles.ButtonMedium]: size === 'medium',
            [styles.ButtonFullWidth]: fullWidth === true,
            [styles.ButtonDisabled]: disabled === true,
        },
        className
    );
    return (
        <button onClick={onClick} {...rest} className={classes}>
            {children}
        </button>
    );
};

export { Button };
