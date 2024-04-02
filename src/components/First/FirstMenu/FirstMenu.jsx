import React, { useState } from 'react';
import HumanIcon from '../../../images/icon.png'
import Pensel from '../../../images/Pensel.png'
import Dymond from '../../../images/dymond.png'
import Human from '../../../images/human.png'
import arrowUp from '../../../images/upArr.png'

const FirstMenu = ({isMenuActive , setMenuActive}) => {
    // const [ArrOfLinks , setArrOfLinks] = useState( { value : 'Создать задание' , href : './' },
    // { value : 'Найти задание' , href : './' },
    // { value : 'Создать задание' , href : './' },
    // { value : 'Мои задание' , href : './' },
    // { value : 'Уведомления' , href : './' },
    // { value : 'Новости Коннект.биржи' , href : './' },
    // {value : 'Стать исполнителем' , href : './'}) 
    return (
        <div className= {  isMenuActive ? 'FirstMenu'  :  'FirstMenu hidden'  }>
            <div className='close'  onClick = {() => { setMenuActive(!isMenuActive)}  } >
                <div className="close__container" style={{position : 'relative'}}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="FirstMenu__top">
                <img src= {HumanIcon} alt="" />
                <div className="FirstMenu__top-right">
                    <p className='MenuName'>Nedzelskiy</p>
                    <div className='MenuProfile'>
                        <p>Профиль</p>
                        <img src = {Pensel} alt="" />
                    </div>
                </div>
            </div>
            <div className="MenuPrice">
                <img className='upArr' src= {arrowUp} alt="" />
                <p className='MenuTextPrice'>1 TON</p>
                <img src= {Dymond} alt="" />
                <p className='MenuTextRublePrice'>~   250 RUB</p>
            </div>
            <div className='MenuList'>
                <a href="">Создать задание</a>
                <a href="">Найти задания</a>
                <a href="">Мои задания</a>
                <a href="">Уведомления</a>
                <a href="">Новости Коннект.биржи</a>
                <a href="" style={{color : 'rgb(42, 207, 88)'}}> Стать исполнителем </a>
            </div>
            <div className="Menu__Helps">
                <a className='' href="">Поддержка </a>
                <img src= {Human} alt="" />
            </div>

        </div>
    );
};

export default FirstMenu;