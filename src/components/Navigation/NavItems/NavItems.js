import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const navItems = () => (
    <ul className={styles.NavItems}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link="/" active={false}>Checkout</NavItem>
    </ul>
);

export default navItems;