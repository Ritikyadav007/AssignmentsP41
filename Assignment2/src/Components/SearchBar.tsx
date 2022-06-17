import React from "react";
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {DarkNavbarStyle, LightNavbarStyle} from '../theme';

type SearchBarProps = {
	term: Function;
	isClicked: Function;
	theme: string;
};

export default function(props: SearchBarProps) {
	const {term, isClicked, theme} = props;
	const ThemeButton =
		theme == 'light' ? Brightness2OutlinedIcon : Brightness7Icon;

	const NavTheme = theme == 'light' ? LightNavbarStyle : DarkNavbarStyle;
	return (
		<div>
			<NavTheme>
				<nav className='navbar '>
					<div className='container-fluid'>
						<span className='navbar-brand'>UserCart</span>
						<div></div>
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

							<ThemeButton
								onClick={() => {
									isClicked(true);
								}}
							/>
						</form>
					</div>
				</nav>
			</NavTheme>
		</div>
	);
}
