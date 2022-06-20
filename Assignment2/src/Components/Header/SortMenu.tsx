import { Button, Dropdown, Menu, Space } from 'antd'
import React from 'react'

type SortMenuProps = {
    selectedSortType: Function;
}


export default function SortMenu(props: SortMenuProps) {
    const { selectedSortType } = props;
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <span onClick={() => selectedSortType('name')}>Name</span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <span onClick={() => selectedSortType('phone')}>Phone</span>
                    ),
                }
            ]}
        />
    );
    return (
        <Dropdown overlay={menu} placement="bottom">
            <Button><b>Sort By</b></Button>
        </Dropdown>
    )
}


