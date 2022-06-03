import {Link} from 'react-router-dom' 

const Navbar = () => {
    return ( 
        <nav>
                <h1>Google sheets</h1>

                <div className='nav-links'>
                    <Link to="/">Form</Link>
                    <Link to="/sheets">Sheet</Link>
                </div>
        </nav>
    );
}
export default Navbar