import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';

import './preview-collection.style.scss';

const PreviewCollection = ({ title, items}) => (
    <div className="collectionPreview">
        <h1 className="title">{ title }</h1>
        <div className="preview"> 
        {
            items.filter((item, index) => index < 4).map(({ id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}></CollectionItem>
            ))
        }
            
        </div>
    </div>

);


export default PreviewCollection;