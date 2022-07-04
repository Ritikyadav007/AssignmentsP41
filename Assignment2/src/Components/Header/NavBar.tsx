import React, { ReactNode, useContext } from 'react';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './NavBar.css';
import { ThemeContext } from '../../themeStore';

type NavBarProps = {
	term: Function;
	isClicked: Function;
	children: ReactNode;
};

export default function NavBar(props: NavBarProps) {
	const { term, isClicked, children } = props;
	const theme = useContext(ThemeContext);
	const ThemeButton =
		theme == 'light' ? Brightness2OutlinedIcon : Brightness7Icon;


	return (
		<div className='nav-wrapper' id={theme} >
			<nav className='navbar'>
				<div className='container-fluid'>
					<span className='navbar-brand'>UserCart</span>
					{children}
					<form className='d-flex'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
							onChange={(e) => {
								term(e.target.value);
							}}
						/>
					</form>
					<ThemeButton
						onClick={() => {
							isClicked(true);
						}}
					/>
				</div>
			</nav>
		</div>
	);
}
