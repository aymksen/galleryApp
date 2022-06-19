import React from 'react';
import Pin from './Pin.js';

export default function PinterestLayout() {
  return (
    <div style={styles.pin_container}>
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
        <Pin size='small' />
        <Pin size='medium' />
        <Pin size='large' />
    </div>
  )
}

const styles ={
    pin_container :{
        margin:'0',
        padding:'10px 15px 10px 15px',
        borderRadius: '32px',
        width:'80vw',
        backgroundColor:'#837381',
        position:'absolute',
        left:'50%',
        transform: 'translateX(-50%)',
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent:'center',
    }
}
