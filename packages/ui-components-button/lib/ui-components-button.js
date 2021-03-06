import React from 'react';
import cx from 'clsx';
import styles from './styles.css'

const Button = (props) => {
    const { className, label = '', type = "primary", size = "medium", onClick, disabled = "false", fullWidth = "false", Icon, ...rest } = props;
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
            {Icon && <Icon />}
            {label}
        </button>
    );
};

export { Button };
