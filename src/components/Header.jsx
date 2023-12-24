import { Logo } from './icons/Logo'
import './style.css'
import imageSearch from './img/search.svg'
import { useState } from 'react'
import { useBookStore } from '../store/bookStore'

export const Header = () => {
  const [value, setValue] = useState('cat')
  const updateValue = useBookStore((state) => state.updateValue)

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      console.log('Presionaste Enter', value)
      updateValue(value)
    }
  }

  return (
    <header className="py-4 fixed bg-white w-full">
      <div className="w-[95%] m-auto">
        <ul className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-1 md:gap-4 font-bold text-gray-700 text-xs md:text-sm">
            <li>
              <a href="">
                <Logo />
              </a>
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
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}
              />
            </li>
          </div>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-square-rounded"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#597e8d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
