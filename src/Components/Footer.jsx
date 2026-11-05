import { NavLink } from 'react-router-dom'
import footerApi from '../api/footerApi.json'
import { FaGlobe, FaMapMarkedAlt, FaUsers, FaInfoCircle } from 'react-icons/fa'

const Footer = () => {
  const IconMap = {
    FaGlobe: FaGlobe,
    FaMapMarkedAlt: FaMapMarkedAlt,
    FaUsers: FaUsers,
    FaInfoCircle: FaInfoCircle,
  }

  return (
    <footer className="bg-black text-white border-t border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-5">
        <div>
          <div className="pb-5 flex justify-between items-center border-b border-white">
            {footerApi.map((curElem, index) => {
              const { icon, title, detail } = curElem
              const Icon = IconMap[icon]
              return (
                <div key={index} className="flex items-center gap-5">
                  <div>
                    <Icon className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm">{detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>
              Copyright &copy; 2026, All right reserved by{' '}
              <span className="font-semibold">@siddharthkapdi</span>
            </p>
          </div>
          <div>
            <ul className="flex gap-5 text-gray-500">
              <li>
                <NavLink to={'/'} className="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className="">
                  Social
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className="">
                  Source Code
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
