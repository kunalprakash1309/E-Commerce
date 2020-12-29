import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../../components/collection/collection.component'

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snaphot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snaphot)
            updateCollections(collectionsMap)
        })
    }
    render() {
        const { match } = this.props    
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);