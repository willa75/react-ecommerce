import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { sellectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
);

const mapToStateProps = createStructuredSelector({
    collections: sellectCollectionsForPreview
});

export default connect(mapToStateProps)(CollectionOverview);
