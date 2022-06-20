import React from "react";
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {DarkNavbarStyle, LightNavbarStyle} from '../theme';
import { Button, Dropdown, Menu } from 'antd';

type SearchBarProps = {
	term: Function;
	isClicked: Function;
	theme: string;
	sortType: Function;
};

export default function(props: SearchBarProps) {
	const menu = (
		<Menu
			items={[
				{
					key: '1',
					label: (
						<span
							onClick={() => {
								props.sortType('name');
							}}
						>
							Name
						</span>
					),
				},
				{
					key: '2',
					label: (
						<span
							onClick={() => {
								props.sortType('phone');
							}}
						>
							Phone No.
						</span>
					),
				},
			]}
		/>
	);
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
						<div>
							<Dropdown overlay={menu} placement='bottom'>
								<Button>Sort By</Button>
							</Dropdown>
						</div>
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
