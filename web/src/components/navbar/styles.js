import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #8757FF;
    color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.6);
    padding: 0;
    margin: 0;
    font-weight: bold;
    display: flex;
    padding: 0 25px;

    *{
        margin: 0;
    }

    a {
        color: #fff;
        padding: 15px 9px;
        transition: .4s;
    }

    a:hover{
        color: #d0d0d0;
        background-color: #4A78FF;
    }

    .dropdown-item{
        color: #8757FF;
        padding: 10px;
    }

    .dropdown-menu {
        padding: 1px 0;
        margin: 0;
    }
`;