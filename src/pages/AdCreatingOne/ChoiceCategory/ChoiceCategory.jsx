import React, { useState } from 'react';
import cl from './ChoiceCategory.module.css'
import OneInput from '../../../components/UI/OneInput/OneInput'
import CategoryItem from '../CategoryItem/CategoryItem';
// import DesignIcon from '../../../../images/icons/Share.svg'
const ChoiceCategory = () => {
    const [inputValue , setInputValue] = useState('')
    const [categoriesArr , setCategoriesArr] = useState([ 
        {name : 'Дизайн' , icon : 0 , value : 'design' , key : 1}
    ])
     return (
        <div className={cl.ChoiceCategory}>
                <OneInput value = {inputValue}  setInputValue = {setInputValue} className = {cl.OneInput}/>
                {categoriesArr.map((e) => {
                return <CategoryItem  {...e} /> 

                })}
        </div>
    );
};

export default ChoiceCategory;