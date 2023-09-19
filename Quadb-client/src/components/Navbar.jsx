import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

const Navbar = () => {
  const [val , setVal] = useState('BTC')
  const currencySelectHandler = (e)=>{
    setVal(e.target.value)
    console.log(val)
  }
  return (
    <div className='flex justify-between items-center px-3 flex-col gap-y-5   md:flex-row'>
      {/* <h1 className='text-5xl text-'>HODLINFO</h1> */}
      <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" className='w-[40%] md:w-[21%]' alt="" />
      <div className='flex  flex-wrap justify-center  text-white items-center font-semibold gap-5 lg:gap-7'>
        {/* <h1>INR</h1>
        <h1>BTC</h1>
        <h1>BUY BTC</h1> */}
        <button className=' rounded-xl px-5 py-2  bg-[#2e3241]'>INR</button>
        {/* <button className=' rounded-xl px-5 py-2 bg-[#2e3241]'>BTC</button> */}
        <select onChange={currencySelectHandler} value={val} className=' rounded-xl px-5 py-2 bg-[#2e3241] outline-none'>
          <option value={'BTC'} > BTC</option>
          <option value={'ETH'}> ETH</option>
          <option value={'TXR'}> TXR</option>
          <option value={'BTC'}> BTC</option>
          <option value={'ETH'}> ETH</option>
          <option value={'TXR'}> TXR</option>
        </select>
        <button className=' rounded-xl px-5 py-2 bg-[#2e3241]'>BUY {val}</button>

      </div>

      <div>
        <h1></h1>
        <button className='p-2 bg-[#3dc6c1] pr-4 rounded-md'>Connect Telegram</button>
        <Switch className='' color='default' defaultChecked/>
      </div>
    </div>
  )
}

export default Navbar
