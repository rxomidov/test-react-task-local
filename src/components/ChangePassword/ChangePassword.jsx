import React, {useState} from 'react';
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import styled from "styled-components";
import StyledButton from "../../layout/StyledButton/StyledButton";
import axios from "axios";
import {ShowNotification} from "../../layout/ShowNotification/SHowNotification";

const schema = yup.object().shape({
    current: yup.string().required().default("This field is required!"),
    new: yup.string().required().default("This field is required!"),
    confirm: yup.string().oneOf([yup.ref('new'), null], 'passwords must match').required().default("This field is required!"),
});

const ChangePassword = () => {

    const dispatch = useDispatch();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const {handleSubmit, control, formState: {errors}, reset, register} = methods;

    const onSubmit = (data) => {
        // console.log(data)
        let token = localStorage.getItem("token");

        let bodyFormData = new FormData();

        bodyFormData.append('old_password', data.current);
        bodyFormData.append('new_password', data.new);
        bodyFormData.append('repeat_password', data.confirm);

        axios.post(`http://92.63.206.40:1122/api/change_password`, bodyFormData, {
                headers: {
                    "x-access-token": token,
                }
            }
        ).then(response => {
            // console.log(response.data.msg);
            ShowNotification(
                "success",
                `${response.data.msg}`,
                "Successfully edited!"
            );
            resetForm();
        }).catch(error => {
            // console.log(error)
            ShowNotification(
                "error",
                `${error.msg}`,
                "Please try again!"
            );
        })
    };

    const resetForm = () => {
        reset({
            current: null,
            new: null,
            confirm: null,
        });
    };

    return (
        <Wrapper>
            <div className="text-center">
                <h3>Change password</h3>
                <p style={{fontSize: 16}}> We suggest you change your password regularly</p>
            </div>
            <div className="w-75 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="my-1">Currently password </label>
                        <Controller
                            name="current"
                            rules={{required: true}}
                            render={({
                                         field: {onChange, onBlur, value, ref},
                                         fieldState: {invalid, isTouched, isDirty, error},
                                         formState,
                                     }) => (
                                <Input.Password
                                    onChange={onChange} onBlur={onBlur} value={value}
                                    placeholder="Enter your login here"
                                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            )}
                            control={control}
                            defaultValue=""
                        />
                        {errors.current && <div className="text-danger float-end">current password is required</div>}
                    </div>
                    <div className="mt-2">
                        <label className="my-1">New password</label>
                        <Controller
                            name="new"
                            rules={{required: true}}
                            render={({
                                         field: {onChange, onBlur, value, ref},
                                         fieldState: {invalid, isTouched, isDirty, error},
                                         formState,
                                     }) => (
                                <Input.Password
                                    onChange={onChange} onBlur={onBlur} value={value}
                                    placeholder="Enter your password here"
                                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            )}
                            control={control}
                            defaultValue=""
                        />
                        {errors.new && <div className="text-danger float-end">new password is required</div>}
                    </div>
                    <div className="mt-2">
                        <label className="my-1">Confirm password</label>
                        <Controller
                            name="confirm"
                            rules={{required: true}}
                            render={({
                                         field: {onChange, onBlur, value, ref},
                                         fieldState: {invalid, isTouched, isDirty, error},
                                         formState,
                                     }) => (
                                <Input.Password
                                    onChange={onChange} onBlur={onBlur} value={value}
                                    placeholder="Enter your password here"
                                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            )}
                            control={control}
                            defaultValue=""
                        />
                        {errors.confirm && <div className="text-danger float-end">{errors.confirm.message}</div>}
                    </div>
                    <div className="mt-2">
                        <div className="text-center mt-4">
                            <StyledButton type="submit" text={"change"}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-5 position-relative">
                <p className="m-0">
                    Last phone number change: 29/07/2021 22:09 22:09 - IP 151.33.106.247
                </p>
            </div>
        </Wrapper>
    );
};

export default ChangePassword;

const Wrapper = styled.div`
  
`;