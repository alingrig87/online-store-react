import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
	return (
		<div className="navbar" style={{ backgroundColor: 'red', padding: '10px' }}>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/admin">Admin</Link>
			</div>
			<div>
				<Link to="/cart">Cart</Link>
			</div>
		</div>
	);
};
