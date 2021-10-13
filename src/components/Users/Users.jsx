import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow }) => {
  return <div>
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} />
    {
      users.map( user => <User key={user.id} user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)
    }
</div>
}

export default Users;