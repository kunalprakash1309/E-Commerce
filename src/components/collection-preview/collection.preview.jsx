import React from 'react'
import CollectionItem from '../collection-items/collection-items.components'

import './collection-preview.style.scss'

const CollectionPreview = (props) => (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {
                props.items.filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;