import React from 'react';
import styled from "styled-components";
import ChangeProfile from "../../components/ChangeProfile/ChangeProfile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import ChangePhoneNumber from "../../components/ChangePhoneNumber/ChangePhoneNumber";
import Forward from "../../components/Forward/Forward";

const Profile = () => {
    return (
        <ProfileWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="profile-card">
                            <ChangeProfile/>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="profile-card">
                            <ChangePassword/>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="profile-card">
                            <ChangePhoneNumber/>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="profile-card">
                            <Forward/>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileWrapper>
    );
};

export default Profile;

const ProfileWrapper = styled.div`
  .profile-card{
    padding: 2rem;
    box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 12px 12px;
    min-height: 30rem;
  }
`;