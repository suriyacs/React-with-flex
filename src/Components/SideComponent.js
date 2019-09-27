import React from 'react';
import './SideComponent.scss';

const SideMenuComponent = (({userDetail}) => {
  return (
    <div className="row">
      <div className="col-12 user-detail">
        <span>Name: {userDetail.first_name} {userDetail.last_name}</span>
        <span>Id: {userDetail.id}</span>
      </div>
    </div>
  )
});

export default SideMenuComponent;