import React from  'react';
import { getUserList } from '../../service/userservice';
import SideMenuComponent from '../../Components/SideComponent';
import './MainComponent.scss';

class MainComponent extends React.Component {
  state = {
    userList: [],
    selectedUser: {}
  }

  componentDidMount() {
    this.getUserList();    
  }

  getUserList = async () => {
    const users = await getUserList();
    if(users && users.data && users.data.length) {
      this.setState(({userList}) => {
        return {userList: users.data};
      })
    }
  }

  showUserDetail = (currentUSer) => {
    console.log('selectedUser',currentUSer);
    this.setState(({selectedUser}) => (
      { selectedUser: currentUSer }
    ));
  }

  renderUserList = () => {
    const { userList } = this.state;
    return (
      userList && userList.length &&
        userList.map((user) => (
          <div onClick={() => { this.showUserDetail(user); }} key={user.id}
            className="col-xs-12 col-sm-11 col-md-6 col-lg-6 col-xl-4 c-pointer">
            <div className="user-grid-common">
              {user.first_name} {user.first_name}
            </div>          
          </div>
        ))
    )
  }

  render() {
    const { selectedUser } = this.state;
    return (
      <div className="user-list">
        <div className="row">
          <div className={`${Object.keys(selectedUser) && 
            Object.keys(selectedUser).length ? 'col-xs-12 col-sm-8 col-md-9 animation' : 'col-12'}`}>
            <div className="row">
              {this.renderUserList()}
            </div>            
          </div>
          {
            Object.keys(selectedUser) && Object.keys(selectedUser).length ? 
            <div className="col-xs-12 col-sm-4 col-md-3 user-detail">
              <div>UserDetails here</div>
              <div>
                <SideMenuComponent userDetail={selectedUser} />
              </div>
            </div>
            :
            ''
          }          
        </div>
      </div>
    )
  }
}

export default MainComponent;