import React, { ReactEventHandler } from 'react'
import NavBar from './NavBar'
import SortMenu from './SortMenu'

type HeaderProps = {
    setSearchTerm: Function;
    isThemeChange: Function;
    setSortType: Function;
    theme: string;
    sortType: string[];
    sortDirection: string;
    setSortDirection: Function;
}

export default function Header(props: HeaderProps) {
    const { setSearchTerm, isThemeChange, setSortType, theme, sortType, sortDirection, setSortDirection } = props;
    return (
        <NavBar
            term={setSearchTerm}
            isClicked={isThemeChange}
            theme={theme}
        ><SortMenu selectedSortType={setSortType} sortTypes={sortType} sortOrder={sortDirection} setSortOrder={setSortDirection} />
        </NavBar>
    )
}
