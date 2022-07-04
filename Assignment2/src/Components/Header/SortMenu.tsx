import { Cascader } from 'antd'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

type SortMenuItems = {
    selectedSortType: Function;
    sortTypes: string[];
    sortOrder: string;
    setSortOrder: Function;
}


export default function SortMenu(props: SortMenuItems) {
    const { selectedSortType, sortTypes, setSortOrder, sortOrder } = props;
    const options = sortTypes.map((type) => { return { value: type, label: type.toUpperCase() } })
    const SortOrderButton = sortOrder === 'ASC' ? ArrowDropUpIcon : ArrowDropDownIcon;

    return (
        <div>
            <span>SortBy: </span>
            <Cascader defaultValue={[sortTypes[0]]} size={"small"} options={options} onChange={(e) => e === undefined ? selectedSortType(sortTypes[0]) : selectedSortType(e[0])} placeholder="Please select" />
            <SortOrderButton onClick={() => { setSortOrder(true) }} />
        </div>
    )
}


