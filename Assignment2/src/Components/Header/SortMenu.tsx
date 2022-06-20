import { Button, Dropdown, Menu, Space } from 'antd'
import DownOutlined from '@ant-design/icons';
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
                        <span onClick={selectedSortType('NameAsc')}>Name -- Asc</span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <span onClick={selectedSortType('NameDsc')}>Name -- Dsc</span>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <span onClick={selectedSortType('PhoneAsc')}>Phone -- Asc</span>
                    ),
                },
                {
                    key: '4',
                    label: (<span onClick={selectedSortType('PhoneDsc')}>Phone -- Dsc</span>),
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu} placement="bottom">
            <Button><b>Sort By</b></Button>
        </Dropdown>
    )
}


