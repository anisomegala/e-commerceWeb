import React from  'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menuItem.style'


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
<MenuItemContainer 
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
>
    <BackgroundImageContainer 
    className="background-image"
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    />
    <ContentContainer className="content">
    <ContentTitle className="title">{ title.toUpperCase() }</ContentTitle>
    <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
    </ContentContainer>
</MenuItemContainer>


);

export default withRouter(MenuItem);