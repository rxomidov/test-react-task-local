import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import {Checkbox, Input} from "antd";
import StyledButton from "../../layout/StyledButton/StyledButton";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import styled from "styled-components";

const schema = yup.object().shape({
    phoneNumber: yup.string().required().default("This field is required!"),
});

const ChangePhoneNumber = () => {

    const dispatch = useDispatch();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const {handleSubmit, control, formState: {errors}, reset, register} = methods;

    const onSubmit = (data) => {
        console.log(data)
    };

    const resetForm = () => {
        reset({
            phoneNumber: null,
        });
    };

    const [disableForwarding, setDisableForwarding] = useState(false);

    return (
        <Wrapper>
            <div className="text-center">
                <h3>Change Phone number</h3>
                <p style={{fontSize: 16}}>
                    Phone no. currently registered (+998 93 497 11-38)
                    Available services: EXAMS; HELP DASK; ELECTIONS;
                </p>
            </div>
            <div className="w-75 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="my-1">New phone number</label>
                        <Controller
                            name="phoneNumber"
                            rules={{required: true}}
                            render={({
                                         field: {onChange, onBlur, value, ref},
                                         fieldState: {invalid, isTouched, isDirty, error},
                                         formState,
                                     }) => (
                                <Input
                                    onChange={onChange} onBlur={onBlur} value={value}
                                    placeholder="Enter your phone number here"
                                />
                            )}
                            control={control}
                            defaultValue=""
                        />
                        {errors.phoneNumber && <div className="text-danger float-end">phone number is required</div>}
                        <div className="mt-2">
                            Disable forwarding:
                            <Checkbox
                                className="ms-2"
                                checked={disableForwarding}
                                onChange={() => setDisableForwarding(!disableForwarding)}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="text-center mt-4">
                            <StyledButton type="submit" text={"send"}/>
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

export default ChangePhoneNumber;

const Wrapper = styled.div`
  
`;