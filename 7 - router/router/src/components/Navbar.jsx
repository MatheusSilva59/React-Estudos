import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className={({isActive}) => (isActive ? 'active' : 'notActive')}>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>*/}
        </nav>
    )
}

export default Navbar

// Link utilizado para direcionar para alguma página pelo clique, porém não possui atributo IsActive como o NavLink possui, útil para marcar em qual página o usuário está em um navbar