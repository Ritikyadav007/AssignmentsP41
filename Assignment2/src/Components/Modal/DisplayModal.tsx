import React from 'react'
import { useDispatch } from 'react-redux';
import { user } from '../../store/reducers';
import AppModal from './AppModal';
import UserForm from '../UserForm/UserForm';

type DisplayModalProps = {
    users: user[];
    editedUser: Number | null;
    CloseModal: Function;

}

export default function DisplayModal(props: DisplayModalProps) {
    const { users, editedUser, CloseModal } = props;
    const dispatch = useDispatch();
    return (
        <AppModal
            visible={editedUser != null}
            title='Edit User'
            closeModal={CloseModal}
            footer={null}
        >
            <UserForm
                user={
                    users.filter(
                        (user) => user.id == editedUser
                    )[0]
                }
                onSubmit={(updatedUser: user) => {
                    const updatedUsers = users.map((item) => {
                        if (item.id === updatedUser.id) {
                            return updatedUser;
                        } else {
                            return item;
                        }
                    });
                    dispatch({
                        type: 'SET_DATA',
                        payload: updatedUsers,
                    });
                    CloseModal();
                    console.log(updatedUser);
                }}
            />
        </AppModal>
    )
}
