import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const pages = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Products',
            path: '/products'
        }
    ]
    return (
        <nav>
            <ul className='products'>
                {
                    pages.map((page, index) => (
                        <NavLink key={index} to={page.path}>{page.name}</NavLink>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar