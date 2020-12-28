import React from 'react'
import { connect } from 'react-redux'

import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection-preview/collection.preview'

import './collection-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    collections: selectCollectionForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)

