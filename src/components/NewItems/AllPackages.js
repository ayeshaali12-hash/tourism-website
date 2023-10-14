import "./AllPackages.css";
import React, { useState } from 'react';
import "./AllPackages.css"
import Indonesia from './Indonesia';
import Pakistan from "./Pakistan";
import Switzerland from "./Switzerland";


export default function AllPackages() {
    const[selectCountry, setSelectCountry] = useState('Indonesia');
    const showCountry = (country) => {
        setSelectCountry(country);
    }
  return (
    <div>
        <div className="package-btn-div">
        <button className='package-btn' onClick={()=> showCountry('Indonesia')}>Indonesia</button>
        <button className='package-btn' onClick={()=> showCountry('Switzerland')}>Switzerland</button>
        <button className='package-btn' onClick={()=> showCountry('Pakistan')}>Pakistan</button>
        </div>
        <div className="all-packages-div">
            {selectCountry === 'Indonesia' && <Indonesia />}
            {selectCountry === 'Switzerland' && <Switzerland />}
            {selectCountry === 'Pakistan' && <Pakistan />}
            
            
        </div>
      
    </div>
  )
}
