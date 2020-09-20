// import React from 'react';
// import styles from './Button.module.css';

// const Button = (props) => {
//     return <Button className={[styles.Button,styles[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</Button>
// }

// export default Button;

import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;