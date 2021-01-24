import initPage from './modules/initPage';
import auth from './modules/auth';
import profile from './modules/profile';
import {modalHtml, modals} from './modules/modals';
import tabs from './modules/tabs';
import '../styles/Scss/style.scss';


document.addEventListener('DOMContentLoaded', function() {
    'use strict';  
    
    initPage();
    // profile();
    modalHtml();
    modals();
    tabs('.mytabs', '.mytab', '.mytab-content', 'active');
    auth();
});
