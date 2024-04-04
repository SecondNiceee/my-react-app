import React, { useState } from 'react';
import HumanIcon from '../../../images/icon.png'
import Dymond from '../../../images/dymond.png'
import arrowUp from '../../../images/upArr.png'
import Close from './Close';
import SmallDimond from '../../UI/SmallDimond/SmallDimond';
import UpArr from '../../UI/UpArr/UpArr';
import Human from '../../UI/Human/Human'
import Pensel from '../../UI/Pencel/Pencel'
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
            <Close isMenuActive = {isMenuActive} setMenuActive = {setMenuActive}  />
            <div className="FirstMenu__top">
                <img className='icon' src= {HumanIcon} alt="" />
                <div className="FirstMenu__top-right">
                    <p className='MenuName'>Nedzelskiy</p>
                    <div className='MenuProfile'>
                        <p>Профиль</p>
                        <Pensel className='normail' />
                    </div>
                </div>
            </div>
            <div className="MenuPrice">
                <UpArr className= 'upArr' /> 
                <p className='MenuTextPrice'>1 TON</p>
                 <SmallDimond className= 'dymond' /> 
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
                <Human />
            </div>

        </div>
    );
};

export default FirstMenu;