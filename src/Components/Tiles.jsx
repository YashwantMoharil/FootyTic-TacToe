import React from 'react';
function Tiles({className, value, onClick}) {
    return (  
        <div onClick = {onClick} className={`tile ${className}`}>
            {value}
            </div>
    );
}

export default Tiles;