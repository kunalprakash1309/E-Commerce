import React from 'react'
import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selector.js'

import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

const Directory = ({ sections }) => (

    <div className="directory-menu">

        {/* in this way also we can do the same */}
            {/* this.state.sections.map((section) => (
                <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} />
            )) */}


        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }

    </div>
)

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);