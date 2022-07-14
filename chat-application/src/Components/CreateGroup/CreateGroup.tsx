/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../store/AuthContext';
import { useUser } from '../../store/UserContext';
import AppModal from '../AppModal';
import Friend from '../Friend/Friend';
import './CreateGroup.css';

type CreateGroupProps = {
  isVisible: boolean;
  onCancel: Function;
  onSave: Function;
};

export default function CreateGroup(props: CreateGroupProps) {
  const { user } = useAuth();
  const { friendList } = useUser();
  const { isVisible, onCancel, onSave } = props;
  const [groupName, setGroupName] = useState('');
  const [selectedUser, setSlectedUser] = useState('');

  const renderFriendList = () => {
    if (!friendList) {
      // Show No Friends available View
      return null;
    }

    return (
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          setSlectedUser(e.target.value);
        }}
        required
      >
        <option>Open this select menu</option>
        {friendList.map((userData: any) => {
          if (userData.uid !== user.uid) {
            return <option value={userData.uid}>{userData.name}</option>;
          }
        })}
      </Form.Select>
    );
  };
  return (
    <AppModal
      title="Create New Group"
      isModalVisible={isVisible}
      handleCancel={onCancel}
    >
      <div className="create_group">
        <div className="create_group_form">
          <div className="mb-3">
            <label htmlFor="Input1" className="form-label">
              Group Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Input1"
              onChange={(e) => {
                setGroupName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Input2" className="form-label">
              Group Members
            </label>
            <input type="text" className="form-control" id="Input2" />
          </div>
        </div>
        {renderFriendList()}
        <div className="button_controls">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              onSave(groupName, selectedUser);
            }}
          >
            Create Group
          </button>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={() => {
              onCancel();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </AppModal>
  );
}
