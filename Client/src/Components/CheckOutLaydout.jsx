import { Outlet, Link } from 'react-router-dom'
import '../CSS/checkoutlayout.css'

const CheckOutLaydout = () => {
    return(
        <div className='checkoutLayoutContainer'>
            <h2>Check Out</h2>
            <div className='checkoutContaint'>
                <main>
                    <Outlet />
                </main>
                <div className='cartSummary'>
                    <div className='summaryHeader'>
                        <h3>Summary</h3>
                        <Link to='/cart'>Edit Cart</Link>
                    </div>
                    <div className='summaryContainer'>
                        <span>Empty Cart</span><Link to='/products'> go shop</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutLaydout