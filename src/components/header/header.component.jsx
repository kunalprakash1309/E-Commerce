import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils.js'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {ReactComponent as Logo} from '../../assests/crown.svg'

import './header.style.scss'

import { connect } from 'react-redux'

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut() } >SIGN OUT</div>
                : 
                <Link to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden? null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);