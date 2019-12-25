/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.fakeUsers,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
