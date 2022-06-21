import { Button, Cascader, Dropdown, Menu, Space } from 'antd'
import React from 'react'

type SortMenuItems = {
    selectedSortType: Function;
    sortTypes: string[];
}


export default function SortMenu(props: SortMenuItems) {
    const { selectedSortType, sortTypes } = props;
    const options = sortTypes.map((type) => { return { value: type, label: type.toUpperCase() } })
    return (
        <div>
            <span>SortBy: </span>
            <Cascader defaultValue={[sortTypes[0]]} options={options} onChange={(e) => e === undefined ? selectedSortType(sortTypes[0]) : selectedSortType(e[0])} placeholder="Please select" />
        </div>
    )
}


