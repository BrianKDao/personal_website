import React from 'react';

import logo from '../logo.svg';

export default function InfiniteCarousel(){
    return(
        <div style={styles.container}>
            <ul style={styles.scroller}>
                <li>
                    <img src={logo} className="App-logo" alt="logo" />
                </li>
                <li>
                    <img src={logo} className="App-logo" alt="logo" />
                </li>
                <li>
                    <img src={logo} className="App-logo" alt="logo" />
                </li>
            </ul>
        </div>
    )
};

const styles = StyleSheet.create({
    container:{
        
    },
    scroller: {
        flexDirection: 'row', // Use flexbox layout with horizontal direction
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin
    }
    
})