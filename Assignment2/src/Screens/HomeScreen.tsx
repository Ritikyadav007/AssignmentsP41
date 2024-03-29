import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiState, user } from '../store/reducers';
import DisplayModal from '../Components/Modal/DisplayModal';
import { } from '../theme';
import Header from '../Components/Header/Index';
import UserCard from '../Components/UserCard/UserCard';
import Loader from '../Components/Loader/Loader';
import { ThemeContext } from '../themeStore/index';
import './HomeScreen.css';

const sortTypes: string[] = ['name', 'phone'];

// type HomeScreenProps = {
//     users: Array<user>;
// };

export default function HomeScreen() {
    const [theme, setTheme] = useState('light');
    // Search Functionality
    const [searchTerm, setsearchTerm] = useState<string>('');

    const [sortingType, setSortingType] = useState<string>(sortTypes[0]);
    console.log(sortingType);
    const [sortOrder, setSortOrder] = useState<string>('ASC');

    const users = useSelector<ApiState, ApiState['users']>(
        (state) => state.users
    );
    const isLoaded = useSelector<ApiState>((state) => state.isLoading);
    const dispatch = useDispatch();
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch({ type: 'SET_DATA', payload: users });
        dispatch({ type: 'SET_ISLOADING', payload: true });
    };

    useEffect(() => {
        getUsers();
    }, []);

    const getTheme = (val: boolean) => {
        if (val) {
            theme == 'light' ? setTheme('dark') : setTheme('light');
        }
    };

    const [isEditingUser, setIsEditingUser] = useState<Number | null>(null);

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

    const getSortedUsers = () => {
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

    const setSortingDirection = (val: boolean) => {
        if (val) {
            sortOrder === 'ASC' ? setSortOrder('DSC') : setSortOrder('ASC');
        }
    };


    return !isLoaded ? (
        <Loader />
    ) : (
            <ThemeContext.Provider value={theme}>
                <div className='Home' id={theme}>
                    <Header
                        setSearchTerm={(newSearchTerm: string) => {
                            setsearchTerm(newSearchTerm);
                        }}
                        setSortType={(val: string) => {
                            setSortingType(val);
                        }}
                        sortType={sortTypes}
                        isThemeChange={getTheme}
                        sortDirection={sortOrder}
                        setSortDirection={setSortingDirection}
                    />

                    <div className='App'>
                        <Row justify='space-around'>
                            {(sortOrder === 'ASC'
                                ? getSortedUsers()
                                : getSortedUsers().reverse()
                            ).map((item) => {
                                const { id } = item;
                                return (
                                    <div className='App-container'>
                                        <UserCard
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
            </ThemeContext.Provider>
    );
}
