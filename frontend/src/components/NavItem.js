import React from 'react';

export default function NavItem(props) {
    return (
        <div>
            <button onClick={props.clickHandler}>{props.tittle}</button>
        </div>
    );
}
