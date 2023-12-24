import { Logo } from './icons/Logo'
import './style.css'
import imageSearch from './img/search.svg'
import { useState } from 'react'
import { useBookStore } from '../store/bookStore'

export const Header = () => {

  const [value, setValue] = useState('cat')
  const updateValue = useBookStore(state => state.updateValue)

  const handleKey = (e) => {
    if(e.key === 'Enter') {
      console.log('Presionaste Enter', value);
      updateValue(value)
    }
  }

  return (
    <header className="py-4 fixed bg-white w-full">
      <div className="w-[95%] m-auto">
        <ul className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-1 md:gap-4 font-bold text-gray-700">
            <li>
              <a href=""><Logo/></a>
            </li>
            <li className="select">
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Hoy</a>
            </li>
            <li>
              <a href="">Crear</a>
            </li>
          </div>
          <div className="w-full  ">
            {/* <img className='search' src={imageSearch} alt="" /> */}
            <li className=" flex justify-center ">
        
              <input
                className="w-[90%]  py-3 px-9 rounded-full bg-gray-200  "
                placeholder="Buscar imagenes"
                type="Search"
                onChange={e=> setValue(e.target.value)}
                onKeyDown={handleKey}
              />
            </li>
          </div>
          <li>
            <a href="">User</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
