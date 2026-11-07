import { NavLink } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'

const Header = () => {
  return (
    <nav className="bg-black text-white border-b border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div>
          <NavLink to={'/'} className="text-3xl font-bold">
            World Atlas
          </NavLink>
        </div>
        <div>
          <ul className="hidden sm:flex sm:gap-5">
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'about'}
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'country'}
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
              >
                Country
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'contact'}
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="border-2 border-white px-2 py-1 rounded-lg sm:hidden">
            <MdMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
