import React, {useEffect} from 'react';
import styled from "styled-components";
import profileImage from "../../assets/Profile/profileImage.png"
import camera from "../../assets/Profile/camera.png"
import edit from "../../assets/Profile/edit.png"
import {useDispatch, useSelector} from "react-redux";
import {userInfoStart} from "../../services/actions/userInfoActions";

const ChangeProfile = () => {

    const dispatch = useDispatch();

    const userInfoState = useSelector((state) => state.userInfo.userInfoSuccessData);

    useEffect(() => {
        dispatch(userInfoStart())
    }, []);

    return (
        <Wrapper>
            <div className="row">
                <div className="col-md-3 profile-image mb-2">
                    <img src={profileImage} alt="profile image"/>
                    <div className="upload-image" onClick={() => console.log("upload")}>
                        <img src={camera} alt="camera"/>
                    </div>
                </div>
                <div className="col-md-9 position-relative">
                    <h3>{userInfoState.name} {userInfoState.surname}</h3>
                    <h4>{userInfoState.phone}</h4>
                    <h4>{userInfoState.faculty_name}</h4>
                    <h3>Software Engineer</h3>
                    <div className="edit-button" onClick={() => console.log("edit")}>
                        <img src={edit} alt="edit"/>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <h4>{userInfoState.std_code}</h4>
                    <h4><strong>{userInfoState.email}</strong></h4>
                    <h4>{userInfoState.faculty_name} 2019/20</h4>
                    <h4>{userInfoState.name} {userInfoState.surname} <strong>Active</strong></h4>
                </div>
            </div>
        </Wrapper>
    );
};

export default ChangeProfile;

const Wrapper = styled.div`
  .profile-image{
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
    position:relative;
    img{
      border-radius: 25px;
      width: 100%;
    }
  }
  .upload-image{
    position:absolute;
    right: 0.4rem;
    bottom: 2.5rem;
    cursor: pointer;
  }
  .edit-button{
    position:absolute;
    top: 0;
    right: 0.5rem;
    cursor:pointer;
  }
  @media screen and (max-width: 768px) {
    .profile-image{
    text-align: center;
      img:first-child{
        width: 100px;
      }
    }
    .upload-image img{
      width: 2rem;height: 2rem;
    }
  }
`;