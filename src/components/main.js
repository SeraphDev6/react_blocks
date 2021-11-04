import React, { Component } from 'react';
import Ad from './ad';
import styles from './main.module.css';
import Subcontent from './subcontent';


class Main extends Component{
    render(){
        return(
            <div className={styles.main}>
                <Subcontent />
                <Subcontent />
                <Subcontent />
                <Ad />
            </div>
        )
    }
}

export default Main;