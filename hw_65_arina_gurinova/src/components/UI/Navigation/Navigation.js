import React from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/pages/home">Home</NavigationItem>
    <NavigationItem to="/pages/about">About</NavigationItem>
    <NavigationItem to="/pages/contacts">Contacts</NavigationItem>
    <NavigationItem to="/pages/divisions">Divisions</NavigationItem>
    <NavigationItem to="/pages/test">Test</NavigationItem>
    <NavigationItem to="/pages/admin">Admin</NavigationItem>
  </ul>
);

export default NavigationItems;