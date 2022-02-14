import React from 'react';
import styled from "styled-components";

const StyledButton = ({text, type, onClick, ...rest}) => {
    return (
        <Wrapper>
            <button
                onClick={onClick}
                type={type}
                {...rest}
            >
                {text}
            </button>
        </Wrapper>
    );
};

export default StyledButton;

const Wrapper = styled.div`
  button{
    background: var(--text-color);
    transition: var(--main-transition);
    color: #fff;
    padding: 0.5rem 3rem;
    border: none;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 1.5px;
    text-transform:uppercase;
    :hover{
      background: #444;
    }
  }
`;