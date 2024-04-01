import React from 'react';
import DesignIcon from '../../images/Design-Icon.png'
import Share from '../../images/LineShareIcon.png'
import dymond from '../../images/dymond.png'
import galstuk from '../../images/galstuk.png'
import MyButton from '../UI/MyButton/MyButton';

const FirstBlock = ({title, oneText, twoText, price, rublPrice}) => {
    return (
             <div className="First__block">
                <div className="FirstMain__top">
                    <img src={DesignIcon} alt="" /> 
                    <p>{title}</p>
                    <div className='circle'>
                        <img src={Share} alt="" />

                    </div>

                </div>
                <div className="FirstMain__middle">
                    <p>{oneText}</p>
                    <p>{twoText}</p>
                </div>
                <div className="FirstMain__bottom">
                    <div className="FirstMain__bottom-left">
                        <div className="FirstMain__price-up">
                            <h3>{price}</h3>
                            <img src={dymond} alt="" />
                        </div>
                        <p>~ {rublPrice}</p>
                    </div>
                    <div className="FirstMain__bottom-right">
                        <img src={galstuk} alt="" />
                        <MyButton>Подробнее</MyButton>
                    </div>
                </div>
            </div>

    );
};

export default FirstBlock;