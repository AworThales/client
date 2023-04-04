import React from 'react';
import people from '../../assets/people.jpg';
import './header.scss';

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={people} alt="" />
    </div>
  )
}
