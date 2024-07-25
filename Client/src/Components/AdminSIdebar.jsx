import '../CSS/adminsidebar.css'
import { FaTachometerAlt, FaPercentage, FaBox, FaChartBar, FaUsers, FaChartLine, FaSun, FaMoon } from 'react-icons/fa'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import { Link } from 'react-router-dom'


const AdminSidebar = () => {

    //theme management
    let {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className={`sidebar ${theme}`}>
          <div className="sidebar-item">
            <Link to='/admin'>
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to='/admin/sales'>
              <FaPercentage />
              <span>Sales</span>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to='/admin/product'>
              <FaBox />
              <span>Products</span>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to='/admin/custumers'>
              <FaUsers />
              <span>Customers</span>
            </Link>
          </div>
          <button className="theme-toggle-button" onClick={() => { setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')) }}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      ) 
}

export default AdminSidebar