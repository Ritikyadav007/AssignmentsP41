import { Row } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { user } from '../redux/reducers';
import { DarkAppStyle, LightAppStyle } from '../theme';
import DisplayModal from './DisplayModal';
import SearchBar from './SearchBar';
import UserCard from './UserCard';



type HomeScreenProps = {
    users: Array<user>
}

export default function HomeScreen(props: HomeScreenProps) {
    const { users } = props;
    const [theme, setTheme] = useState('light');
    const getTheme = (val: boolean) => {
        if (val) {
            theme == 'light' ? setTheme('dark') : setTheme('light');
        }
    };

    const AppTheme =
        theme == 'light' ? LightAppStyle : DarkAppStyle;


    const [
        isEditingUser,
        setIsEditingUser,
    ] = useState<Number | null>(null);

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

    // Search Functionality
    const [searchTerm, setsearchTerm] = useState('');

    const getSearchTerm = (val: string) => {
        setsearchTerm(val);
    }
    const getSearchedUsers = (data: user[]) => {
        const searchedUsers = data
            .filter((item) => {
                if (searchTerm == '') {
                    return item;
                } else if (
                    item.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                ) {
                    return item;
                }
            })
        return searchedUsers;
    }

    const displayUserCard = () => {

    }


    // Sorting Funtionality
    const [sortingType, setSortingType] = useState('id');
    const getSortType = (val: string) => {
        setSortingType(val);
    };
    return (
        <AppTheme>
            <div>
                <SearchBar
                    term={getSearchTerm}
                    isClicked={getTheme}
                    theme={theme}
                    sortType={getSortType}
                />

                <div className='App'>
                    <Row justify='space-around'>
                        {getSearchedUsers(users).map((item) => {
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
                        })
                        }
                        <DisplayModal editedUser={isEditingUser} users={users} CloseModal={closeEditModal} />
                    </Row>
                </div>
            </div>
        </AppTheme>
    )


}