import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


const InfoTable = () => {
    const [cryptos, setCryptos] = useState([])

    useEffect(()=>{
        const fethData = async()=>{

            const response = await axios.get('http://localhost:3000/api/cryptos')
            // console.log(response.data.data)
            setCryptos(response.data.data)
        }
        fethData();
    },[])


  return (
    <div className='py-4' >
            <table className='w-full  border-separate border-spacing-y-4  '>
                <tr className='text-lg md:text-2xl  text-stone-400 rounded'>
                    <th className='my-5'>#</th>
                    <th className='my-5'>Name</th>
                    <th className='my-5'>Last Traded Price</th>
                    <th className='my-5'>Buy / Sell Price</th>
                    <th className='my-5'>Volume</th>
                    <th className='my-5'>Base unit</th>
                </tr>
                {cryptos.map((obj, key) => {
                    return (
                        <tr key={key} className='py-4 my-5 text-base md:text-2xl bg-[#2e3241] font-semibold rounded-lg'>
                    

                    
                        <td className='p-4 my-5'>{key+1}</td>
                        <td className='p-4 my-5'>{obj.name}</td>
                        <td className='p-4 my-5'>₹ {obj.last}</td>
                        <td className='p-4 my-5'>₹ {obj.buy} / ₹ {obj.Sell}</td>
                        <td className='p-4 my-5'>{obj.Volume}</td>
                        <td className='p-4 my-5'>{obj.base_unit}</td>
                        
                    </tr>
                    )
                })}
            
                {/* <tr className='py-4 my-5 text-2xl bg-gray-700 font-semibold rounded-lg'>
                    

                    
                    <td className='p-4 my-5'>1</td>
                    <td className='p-4 my-5'>WazirX</td>
                    <td className='p-4 my-5'>₹ 23,47,899</td>
                    <td className='p-4 my-5'>₹ 23,35,422 / ₹ 23,46,999</td>
                    <td className='p-4 my-5'>-8.94 %</td>
                    <td className='p-4 my-5'>▼ ₹ 2,30,516</td>
                    
                </tr>
                <tr className='py-4 my-5 text-2xl bg-gray-700 font-semibold rounded-lg'>
                    

                    
                    <td className='p-4 my-5'>1</td>
                    <td className='p-4 my-5'>WazirX</td>
                    <td className='p-4 my-5'>₹ 23,47,899</td>
                    <td className='p-4 my-5'>₹ 23,35,422 / ₹ 23,46,999</td>
                    <td className='p-4 my-5'>-8.94 %</td>
                    <td className='p-4 my-5'>▼ ₹ 2,30,516</td>
                    
                </tr>
                <tr className='py-4 my-5 text-2xl bg-gray-700 font-semibold rounded-lg'>
                    

                    
                    <td className='p-4 my-5'>1</td>
                    <td className='p-4 my-5'>WazirX</td>
                    <td className='p-4 my-5'>₹ 23,47,899</td>
                    <td className='p-4 my-5'>₹ 23,35,422 / ₹ 23,46,999</td>
                    <td className='p-4 my-5'>-8.94 %</td>
                    <td className='p-4 my-5'>▼ ₹ 2,30,516</td>
                    
                </tr> */}
            </table>
        </div>
  )
}

export default InfoTable
