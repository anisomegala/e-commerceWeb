import React from 'react';
import './form-input.style.scss';


const FormInput = ({ onChange, label, ...othersProps}) => (
    <div className='group'>
        <input className='form-input' onChange={ onChange} {...othersProps}/>
        {
            label ?
            (<label className={`${othersProps.value.length ? 'shrink' : '' } form-input-label `}>
                {label}
            </label>)
            : null
        }

    </div>
);


export default FormInput;