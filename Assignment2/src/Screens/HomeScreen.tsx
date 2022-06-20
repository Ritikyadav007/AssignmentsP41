import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { user } from '../store/reducers';
import { DarkAppStyle, LightAppStyle } from '../theme';
import DisplayModal from '../Components/Modal/DisplayModal';
import NavBar from '../Components/Header/NavBar';
import { } from '../theme';
import Header from '../Components/Header/Index';
import SortMenu from '../Components/Header/SortMenu';
import UserCard from '../Components/UserCard/UserCard';

const sortTypes: string[] = ['name', 'phone'];

type HomeScreenProps = {
    users: Array<user>;
};

export default function HomeScreen(props: HomeScreenProps) {
    const { users, ...others } = props;

    const [theme, setTheme] = useState('light');
    // Search Functionality
    const [searchTerm, setsearchTerm] = useState<string>('');

    const [sortingType, setSortingType] = useState<string>(sortTypes[0]);
    console.log(sortingType)
    const [isAcc, setIsAcc] = useState<Boolean>(true);

    const getTheme = (val: boolean) => {
        if (val) {
            theme == 'light' ? setTheme('dark') : setTheme('light');
        }
    };

    const AppTheme = theme == 'light' ? LightAppStyle : DarkAppStyle;

    const [isEditingUser, setIsEditingUser] = useState<Number | null>(null);

    const dispatch = useDispatch();

    const handleLikeUser = (id: number) => {
        dispatch({ type: 'LIKE_USER', payload: id });
    };

    const handleDelete = (id: number) => {
        dispatch({ type: 'DELETE_USER', payload: id });
    };

    const handleEdit = (id: number) => {
        setIsEditingUser(id);
    };

    const closeEditModal = () => {
        setIsEditingUser(null);
    };

    const displayUserCard = () => { };


    const getUsers = () => {
        const filteredUsers: user[] =
            searchTerm === ''
                ? users
                : users.filter((thisUser) => {
                    const { name } = thisUser;
                    return name.toLowerCase().includes(searchTerm);
                });

        switch (sortingType) {
            // case sortTypes[0]:
            // return filteredUsers.sort((aUser, bUser)=> aUser.name.localeCompare(bUser.name))
            case sortTypes[1]:
                return filteredUsers.sort((aUser, bUser) =>
                    aUser.phone.localeCompare(bUser.phone)
                );
            default:
                return filteredUsers.sort((aUser, bUser) =>
                    aUser.name.localeCompare(bUser.name)
                );
        }
    };

    const getSortingType = (val: string) => {
        setSortingType(val)
        console.log(sortingType)
    }


    return (
        <AppTheme>
            <div>
                <Header
                    setSearchTerm={(newSearchTerm: string) => {
                        setsearchTerm(newSearchTerm);
                    }}
                    setSortType={(val: string) => { setSortingType(val) }}
                    theme={theme}
                    isThemeChange={getTheme}
                // isAcensending={true}
                // setSortingDirection={()=> {}}
                />

                <div className='App'>
                    <Row justify='space-around'>
                        {getUsers().map((item) => {
                            const { id } = item;
                            return (
                                <div className='App-container'>
                                    <UserCard
                                        theme={theme}
                                        key={id}
                                        user={item}
                                        deleteUser={() => handleDelete(id)}
                                        likeUser={() => handleLikeUser(id)}
                                        editUser={() => handleEdit(id)}
                                    />
                                </div>
                            );
                        })}
                        <DisplayModal
                            editedUser={isEditingUser}
                            users={users}
                            CloseModal={closeEditModal}
                        />
                    </Row>
                </div>
            </div>
        </AppTheme>
    );
}
