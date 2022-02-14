import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import {Checkbox, Input} from "antd";
import StyledButton from "../../layout/StyledButton/StyledButton";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required().default("This field is required!"),
});

const Forward = () => {

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
                <h3>Forward</h3>
                <p style={{fontSize: 16}}>
                    TDAU is not responsible for any lost message due to the activation of the forwarding service. Valid
                    messages are those stored in the server with domain: student@tdau.uz Make sure you regularly delete
                    the messages stored on this server.
                </p>
            </div>
            <div className="w-75 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="my-1">Forwarding e-mail address:</label>
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
                                    placeholder="Enter your e-mail here"
                                />
                            )}
                            control={control}
                            defaultValue=""
                        />
                        {errors.email && <div className="text-danger float-end">email is required</div>}
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
                            <StyledButton type="submit" text={"change"}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-5">
                <p className="m-0">Last e-mail change: 29/07/2021 22:09 - IP 151.33.106.247</p>
            </div>
        </Wrapper>
    );
};

export default Forward;

const Wrapper = styled.div`
  
`;