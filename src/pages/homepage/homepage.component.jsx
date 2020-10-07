import React from 'react';

import Directory from '../../components/directory/directory.component'
import './homepage.style.scss'

/*here we do not use return statement inside to HomePage function
 becouse having () is directly implies that it has only return statement inbuilt
 if we want to use return statement the we need to use {} instead of ()*/

const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage;