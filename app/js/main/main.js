import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component.js';
import Home from '../home/home';

let BasicOpenmrsAppModule = angular.module('BasicOpenmrsApp', 
    [ uiRouter, 
        Home.name])
    .component('main', mainComponent);

export default BasicOpenmrsAppModule;
