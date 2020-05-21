import React from 'react';

const Header = () => {

    return (
        <div style={{width: '100%', height: '65px', backgroundColor: '#000000', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '30.3%'}}>

            </div>
            <div style={{backgroundColor: '#80ac7b', width: '30.3%', display: 'flex', justifyContent:'center'}}>
            </div>
            <div style={{width: '30.3%', alignItems: 'center'}}>
                <h2 style={{textAlign: "right"}}>Logout</h2>
            </div>
        </div>
    )

};

export default Header;