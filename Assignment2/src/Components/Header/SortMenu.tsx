import { Button, Dropdown, Menu, Space } from 'antd'
import React from 'react'

type SortMenuItems = {
    selectedSortType: Function;
    sortTypes: string[];
}


export default function SortMenu(props: SortMenuItems) {
    const { selectedSortType, sortTypes } = props;
    const menuItems = sortTypes.map((type, index) => {
        const obj = { key: index + 1, label: (<span onClick={() => selectedSortType(type)}>{type.toUpperCase()}</span>) }
        return obj
    })

    console.log(menuItems);
    const menu = (
        <Menu
            items={menuItems}
        />
    );
    return (
        <Dropdown overlay={menu} placement="bottom">
            <Button><b>Sort By</b></Button>
        </Dropdown>
    )
}


