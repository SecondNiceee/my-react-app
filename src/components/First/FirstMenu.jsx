import React from 'react';
import HumanIcon from '../../images/icon.png'
import Pensel from '../../images/Pensel.png'
import Dymond from '../../images/dymond.png'
import Human from '../../images/human.png'
const FirstMenu = () => {
    return (
        <div className='FirstMenu'>
            
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