import React from 'react';
import cx from 'clsx';
import styles from './styles.css'

const Text = ({ children, className, type, disabled, ...rest }) => {
    const classes = cx(
        styles.BasicText,
        {
            [styles.Hero]: type === 'hero',
            [styles.Headline1]: type === 'h1',
            [styles.Headline2]: type === 'h2',
            [styles.Headline3]: type === 'h3',
            [styles.Caption]: type === 'caption',
            [styles.TextDisabled]: disabled === true,
        },
        className
    );

    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
};

export { Text };
