import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

    let attachedStyles = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedStyles = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux>
        <Backdrop clicked={props.closed} show={props.open} />
        <div className={attachedStyles.join(' ')}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;