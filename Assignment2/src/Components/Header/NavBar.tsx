import React, { ReactNode } from "react";
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DarkNavbarStyle, LightNavbarStyle } from '../../theme';


type NavBarProps = {
	term: Function;
	isClicked: Function;
	theme: string;
	children: ReactNode;
};

export default function NavBar(props: NavBarProps) {
	const { term, isClicked, theme, children } = props;
	const ThemeButton =
		theme == 'light' ? Brightness2OutlinedIcon : Brightness7Icon;

	const NavTheme = theme == 'light' ? LightNavbarStyle : DarkNavbarStyle;
	return (
		<div>
			<NavTheme>
				<nav className='navbar '>
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
			</NavTheme>
		</div>
	);
}
