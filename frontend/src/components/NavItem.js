import React from 'react';

export default function NavItem(props) {
    return (
        <div>
            <button onClick={props.clickHandler} className={props.theme}>{props.tittle}</button>
        </div>
    );
}
