import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Toggle from '../SideDrawer/Toggle/Toggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <Toggle clicked={props.toggleClicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;