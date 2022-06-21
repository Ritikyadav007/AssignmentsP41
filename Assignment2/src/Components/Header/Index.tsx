import React, { ReactEventHandler } from 'react'
import NavBar from './NavBar'
import SortMenu from './SortMenu'

type HeaderProps = {
    setSearchTerm: Function;
    isThemeChange: Function;
    setSortType: Function;
    sortType: string[];
    sortDirection: string;
    setSortDirection: Function;
}

export default function Header(props: HeaderProps) {
    const { setSearchTerm, isThemeChange, setSortType, sortType, sortDirection, setSortDirection } = props;
    return (
        <NavBar
            term={setSearchTerm}
            isClicked={isThemeChange}
        ><SortMenu selectedSortType={setSortType} sortTypes={sortType} sortOrder={sortDirection} setSortOrder={setSortDirection} />
        </NavBar>
    )
}
