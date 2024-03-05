'use client'
import useCountries from '@/app/hooks/useCountries';
import React from 'react';
import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latling: number[];
  region: string;
  value: string;

}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange:  (value: CountrySelectValue) => void;
}



const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,

}) => {
  const {getAll} = useCountries();
  
  return (
    <div>
      <Select placeholder="AnyWhere" 
      isClearable 
      options={getAll()}
      value ={value}
      onChange={(value) => onChange(value as CountrySelectValue)}
      formatGroupLabel={(option: any) => (

        <div className='flex flex-row items-center gap-3'>
          <div > {option.flag}</div>
          <div> {option.label}</div>,
          <span className='text-neutral-800 ml-1'>
            {option.region}
          </span>
          </div>
      )}

      />
      
    </div>
  )
}

export default CountrySelect
