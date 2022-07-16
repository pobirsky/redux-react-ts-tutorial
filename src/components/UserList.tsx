import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creator/user";
import {dispatch} from 'redux';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>

        </div>
    );
};

export default UserList;
