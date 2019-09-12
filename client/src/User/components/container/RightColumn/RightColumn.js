import React from 'react';

let RightColumn = props => {
    return (
        <section>
            <h1>Hello</h1>
            {props.children}
        </section>
    )
};

export default RightColumn;