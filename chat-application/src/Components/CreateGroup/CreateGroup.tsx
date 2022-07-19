/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
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
  const [usersList, setUsersList] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<CheckboxValueType[]>([]);

  useEffect(() => {
    if (friendList !== undefined) {
      setUsersList([]);
      friendList.map((data: any) => {
        if (user.uid !== data.uid) {
          setUsersList((oldarray: any[]) => [
            ...oldarray,
            { label: data.name, value: data.uid },
          ]);
        }
      });
    }
  }, [friendList]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setSelectedUsers(checkedValues);
  };

  const renderFriendList = () => {
    if (!friendList) {
      // Show No Friends available View
      return null;
    }

    return (
      <Checkbox.Group
        style={{ display: 'flex', flexDirection: 'column' }}
        options={usersList}
        onChange={onChange}
      />
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
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Input2" className="form-label">
              Select Group Members :
            </label>
          </div>
        </div>
        <div className="list_of_users">{renderFriendList()}</div>
        <div className="button_controls">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              onSave(groupName, selectedUsers);
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
