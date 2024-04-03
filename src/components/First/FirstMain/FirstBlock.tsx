import DesignIcon from '../../../images/Design-Icon.png'
import Share from '../../../images/LineShareIcon.png'
import dymond from '../../../images/dymond.png'
import galstuk from '../../../images/galstuk.png'
import MyButton from '../../UI/MyButton/MyButton';

type BlockPropsType = {
    title: string,
    executionPlace: number,
    startTime: string,
    tonPrice: number,
    rublesPrice: number,
    setDetailsActive: any,
    isButton: boolean
}

const FirstBlock = ({title, executionPlace, startTime, tonPrice, rublesPrice , setDetailsActive , isButton}: BlockPropsType) => {
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
                    <p>{executionPlace}</p>
                    <p>{startTime}</p>
                </div>
                <div className="FirstMain__bottom">
                    <div className="FirstMain__bottom-left">
                        <div className="FirstMain__price-up">
                            <h3>{tonPrice}</h3>
                            <img src={dymond} alt="" />
                        </div>
                        <p>~ {rublesPrice}</p>
                    </div>
                    <div className="FirstMain__bottom-right">
                        <img src={galstuk} alt="" />
                        <MyButton style = { isButton ? {} : {display : 'none'} }  onClick = { (e: React.MouseEvent<HTMLButtonElement>) => setDetailsActive(true)  }>Подробнее</MyButton>
                    </div>
                </div>
            </div>

    );
};

export default FirstBlock;