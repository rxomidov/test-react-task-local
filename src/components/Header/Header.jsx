import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container d-flex justify-content-between">
                <div className="header-logo">
                    <h3>LOGO</h3>
                </div>
                <div className="header-items d-none d-md-flex align-items-center">
                    <div>Модули</div>
                    <div>новости</div>
                    <div>ресурсы</div>
                    <div>Поддержка</div>
                    <div>профиль</div>
                    <div>язык</div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: 1rem 0;
  .header-logo{
    h3{
      font-size: 42px;
      font-weight: 800;
      padding: 0.5rem 2rem;
      margin: 0;
    }
  }
  .header-items{
    div{
      font-weight: 700;
      font-size: 14px;
      padding: 0.5rem 1.5rem;
      text-transform:uppercase;
    }
  }
  
  @media screen and (max-width: 992px) {
    .header-logo{
    h3{
      font-size: 24px;
      }
    }
    .header-items{
    div{
        font-size: 1rem;
        padding: 0.5rem 10px;
      }
    }
  }
`;