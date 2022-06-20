import { Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { user } from '../store/reducers';
import { DarkAppStyle, LightAppStyle } from '../theme';
import DisplayModal from '../Components/Modal/DisplayModal';
import NavBar from '../Components/Header/NavBar';
import {} from '../theme'
import Header from '../Components/Header';
import SortMenu from '../Components/Header/SortMenu';
import UserCard from '../Components/UserCard/UserCard';


const sortTypes: string[] = ["name", "phone"]

type HomeScreenProps = {
    users: Array<user>
}

export default function HomeScreen(props: HomeScreenProps) {
    const { users, ...others } = props;

    const [theme, setTheme] = useState('light');
    // Search Functionality
    const [searchTerm, setsearchTerm] = useState<string>('');

    const [sortingType, setSortingType] = useState<string>(sortTypes[0]);
    const [isAcc, setIsAcc] = useState<Boolean>(true)


    
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

    

    const displayUserCard = () => {

    }


    // Sorting Funtionality
    const getSelectedSortType = () => {
        setSortingType(sortTypes[1]);
    };
    console.log(sortingType);

    useEffect(() => {
        const sortArray = (type: string) => {

            switch (type) {
                case 'id':
                    dispatch({ type: 'SET_DATA', payload: [...users].sort((a, b) => (a.id) - (b.id)) })
                    break;
                case 'NameAsc':
                    const sorted = users.sort((a, b) => a.name.localeCompare(b.name))
                    console.log(sorted);
                    dispatch({ type: 'SET_DATA', payload: sorted })
                    break;
                case 'NameDsc':
                    dispatch({ type: 'SET_DATA', payload: [...users].sort((a, b) => (-1) * a.name.localeCompare(b.name)) })
                    break;
                case 'PhoneAsc':
                    dispatch({ type: 'SET_DATA', payload: [...users].sort((a, b) => a.phone.localeCompare(b.phone)) })
                    break;
                case 'PhoneDsc':
                    dispatch({ type: 'SET_DATA', payload: [...users].sort((a, b) => (-1) * a.phone.localeCompare(b.phone)) })
                    break;
                default:
                    break;
            }

            // const sortProperty = types[type];
            // const sorted = users.sort((a, b) => (a.name) - (b.name));

        };

        sortArray(sortingType);
    }, [sortingType])



    const getUsers = () => {
        const filteredUsers: user[] = searchTerm === '' ? users : users.filter(thisUser => {
            const {name} = thisUser;
            return name.toLowerCase().includes(searchTerm)
        });

       
        switch(sortingType) {
            // case sortTypes[0]:
                // return filteredUsers.sort((aUser, bUser)=> aUser.name.localeCompare(bUser.name))
            case sortTypes[1]:
                return filteredUsers.sort((aUser, bUser)=> aUser.phone.localeCompare(bUser.phone));
            default:
                return filteredUsers.sort((aUser, bUser)=> aUser.name.localeCompare(bUser.name))
        }
    }


    return (
        <AppTheme>
            <div>
                <Header
                    searchTerm={searchTerm} 
                    setSearchTerm={(newSearchTerm)=> setsearchTerm(newSearchTerm))}
                    sortTypes={sortTypes}
                    selectedSortType={sortingType} 
                    setSortType={(newSortType)=> setSortingType(newSortType)}
                    isAcensending={true}
                    setSortingDirection={()=> {}} 
                />
                
                <div className='App'>

                    <Row justify='space-around'>
                        isloading? <Loader/>
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
                        })
                        }
                        <DisplayModal editedUser={isEditingUser} users={users} CloseModal={closeEditModal} />
                    </Row>
                </div>
            </div>
        </AppTheme>
    )


}