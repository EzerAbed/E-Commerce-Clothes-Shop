import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSIdebar'
import '../CSS/adminlayout.css'

const AdminLayout = () => {
 return (
    <div className='layoutAdmin'>
        <AdminSidebar />
        <main>
            <Outlet />    
        </main>     
    </div>
    )
 
}

export default AdminLayout