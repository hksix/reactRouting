import React from 'react';

const Link = (props)=>(
    <a href={props.to}>{props.children}</a>
)

export default Link;