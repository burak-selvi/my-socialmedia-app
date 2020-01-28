import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  const Navbar = styled.nav`
    height: 50px;
    width: 100%;  
    background-color: red;
    position: fixed;
    z-index: 3;
    left: 0;
    color: white;
    background-color: rgb(106, 107, 136);
  `;

  const NavWrapper = styled.div`
    height: 100%;
    margin: auto 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Button = styled.button`
    font-size: 1rem;
    text-transform: capitalize;
    color: white;
    cursor: pointer;
    background: transparent;
    border: .05rem solid #595b73;
    border-radius: 0.5rem;
    padding: 10px 15px;
    margin: 0.2rem 0.5rem 0.2rem 0px;
    transition: all 0.5s ease-in-out 0s;
    &:hover{
      background-color: #4e4f65;
    }
    &:focus{
      outline: none;
    }
  `;

  return (
    <React.Fragment>
      <Navbar>
        <NavWrapper>
          <p>Logo</p>
          <div>
            <Button>profile</Button>
            <Button>signin</Button>
          </div>
        </NavWrapper>
      </Navbar>
    </React.Fragment>
  );
}