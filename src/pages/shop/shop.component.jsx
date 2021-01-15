import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPage from '../../components/collection/collection.component'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
    }

    render() {
        const { match, isCollectionsLoaded } = this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> } />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);