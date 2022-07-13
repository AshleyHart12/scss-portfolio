import React, { useEffect, useState } from 'react'
import './Scss/style.scss';
import {setTheme} from './Toggletheme';

function Toggle() {
    const [toggleClass, setToggleClass] = useState('muted');
    let theme = localStorage.getItem('theme');

    const handleClick = () => {
        if(localStorage.getItem('theme') === 'theme-muted') {
            setTheme('theme-bright');
            setToggleClass('bright')
        } else {
            setTheme('theme-muted');
            setToggleClass('muted');
        }
    }

    useEffect(() => {
        if(localStorage.getItem('theme') === 'theme-muted') {
            setToggleClass('muted')
        } else if (localStorage.getItem('theme') === 'theme-bright') {
            setToggleClass('bright')
        }
    }, [theme])

    return (
        <div className='container-toggle'>
            {
                toggleClass === 'bright' ? 
                <input type='checkbox'  className='toggle-checkbox' onClick={handleClick} checked />
                :
                <input type='checkbox'  className='toggle-checkbox' onClick={handleClick} />
            }
            <label htmlFor='toggle' className='toggle-label'>
                <span className='toggle-label-background'></span>
            </label>
        </div>
    )
}

export default Toggle;