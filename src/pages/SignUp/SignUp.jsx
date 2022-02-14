import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {Input, Select} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import bgImg from "../../assets/Login/background.png";
import * as yup from "yup";
import {registerStart} from "../../services/actions/registerActions";

const { Option } = Select;

const schema = yup.object().shape({
    login: yup.string().required().default("This field is required!"),
    password: yup.string().required().default("This field is required!"),
    name: yup.string().required().default("This field is required!"),
    surname: yup.string().required().default("This field is required!"),
    email: yup.string().email().required().default("This field is required!"),
    phone: yup.number().required().default("This field is required!"),
    faculty_id: yup.string().required().default("This field is required!"),
});

const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const {handleSubmit, control, formState: {errors}, reset, register} = methods;

    const onSubmit = (data) => {
        console.log(data);
        let bodyFormData = new FormData();

        bodyFormData.append('login', data.login);
        bodyFormData.append('password', data.password);
        bodyFormData.append('surname', data.surname);
        bodyFormData.append('name', data.name);
        bodyFormData.append('faculty_id', data.faculty_id);
        bodyFormData.append('phone', data.phone);
        bodyFormData.append('email', data.email);

        dispatch(registerStart(bodyFormData));
    };

    const resetForm = () => {
        reset({
            login: null,
            password: null,
            name: null,
            surname: null,
            email: null,
            phone: null,
            faculty_id: null,
        });
    };

    const [facultyList, setFacultyList] = useState([]);

    useEffect(() => {
        axios.get("http://92.63.206.40:1122/api/faculty")
            .then(response => {
                setFacultyList(response.data);
            }).catch(error => {
            console.log(error)
        })
    }, []);

    const registerState = useSelector((state) => state.register.loginSuccess);

    useEffect(() => {
        if (registerState.registerSuccess) {
            navigate("/");
        }
    }, [navigate, registerState]);

    return (
        <SignInWrapper>
            <div className="container-flui">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login-left">
                            <div className="text-center w-75" style={{marginTop: "20%", marginBottom: "10%"}}>
                                <h3>Logo</h3>
                                <h3 className="mt-4" style={{fontWeight: 800}}>Registration Form</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login-form">
                            <div style={{width: 400}}>
                                <div className="text-center">
                                    <h3>logo</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className="my-1">Login</label>
                                        <Controller
                                            name="login"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your login here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.login && <div className="text-danger float-end">login is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Password</label>
                                        <Controller
                                            name="password"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input.Password
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                    iconRender={visible => (visible ? <EyeTwoTone/> :
                                                        <EyeInvisibleOutlined/>)}
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.password &&
                                        <div className="text-danger float-end">password is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Name</label>
                                        <Controller
                                            name="name"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.name && <div className="text-danger float-end">name is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Surname</label>
                                        <Controller
                                            name="surname"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.surname &&
                                        <div className="text-danger float-end">surname is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">e-mail</label>
                                        <Controller
                                            name="email"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.email && <div className="text-danger float-end">email is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Phone number</label>
                                        <Controller
                                            name="phone"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.phone &&
                                        <div className="text-danger float-end">phone number is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Faculty select</label>
                                        <Controller
                                            name="faculty_id"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Select
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Select faculty" style={{width: "100%"}}
                                                >
                                                    {Object.values(facultyList)?.map((faculty, index) => {
                                                        return (
                                                            <Option key={index} value={index}>{faculty}</Option>
                                                        )
                                                    })}
                                                </Select>
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.faculty_id &&
                                        <div className="text-danger float-end">faculty is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <div className="text-center">
                                            <Link to="/signin" className="sign-up">Login</Link>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="text-uppercase sign-in">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SignInWrapper>
    );
};

export default SignUp;

const SignInWrapper = styled.div`
  background: var(--background-color);
  width: 100%;
  height: 100%;
  padding: 2rem;
  .login-left{
    color: #ffffff;
    display:flex;
    justify-content: center;
    //background: var(--background-color) url(${bgImg}) bottom center no-repeat;
    h3{
      font-weight: 700;
      color: #ffffff;
      font-size: 48px;
      line-height: 50px;
      text-transform:uppercase;
    }
  }
  .login-form{
    background: #ffffff;
    padding: 2rem;
    box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    height: calc(100vh - 4rem);
    display:flex;
    align-items: center;
    justify-content:center;
    h3{
      font-weight: 700;
      font-size: 26px;
      line-height: 30px;
      text-transform:uppercase;
    }
  }
  .sign-up{
    color: var(--text-color);
  }
  .sign-in{
    background: var(--text-color);
    transition: var(--main-transition);
    color: #fff;
    padding: 0.5rem 3rem;
    border: none;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 1.5px;
    :hover{
      background: #444;
    }
  }
  
  @media (max-width: 992px) {
    .login-left{
      h3{
        font-size: 32px;
        line-height: 30px;
      }
    }
  }
`;