import React from 'react';
import { connect } from 'react-redux'

import CollectionItem from '../collection-items/collection-items.components'
import { selectCollection } from '../../redux/shop/shop.selector.js'

import './collection.styles.scss'

const CollectionPage = ({ collection, match }) => {
    console.log(match)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXX")
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    // this is currying 
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)