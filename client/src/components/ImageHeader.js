import React from 'react';

const ImageHeader = (props) => {

    return (
        <div style={{flex: 1, marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{cursor: 'pointer'}} src={props.image} width="40" height="40" alt=""/>
        </div>
    )
};

export default ImageHeader;