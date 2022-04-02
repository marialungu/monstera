import React from 'react';
import cx from 'clsx';
import styles from './styles.css'

const Button = (props) => {
    const { className, label = '', type = "primary", size = "medium", onClick, disabled = "false", fullWidth = "false", ...rest } = props;
    console.log(type, label)
    const classes = cx(
        styles.Button,
        {
            [styles.ButtonSecondary]: type === 'secondary',
            [styles.ButtonTertiary]: type === 'tertiary',
            [styles.ButtonLarge]: size === 'large',
            [styles.ButtonSmall]: size === 'small',
            [styles.ButtonFullWidth]: fullWidth === true,
            [styles.ButtonDisabled]: disabled === true,
        },
        className
    );
    return (
        <button onClick={onClick} {...rest} className={classes}>
            {label}
        </button>
    );
};

export { Button };
