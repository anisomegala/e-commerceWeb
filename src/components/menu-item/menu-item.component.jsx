import React from  'react';

import './menu-item.style.scss';


export const MenuItem = ({ title, imageUrl }) => (

<div className="menu-item"> 
    <div className="content">
<h1 className="title">{ title }</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>
</div>


);