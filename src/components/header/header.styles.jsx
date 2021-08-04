import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/aniel.svg'



export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        padding: 10px;
        height: 55px;
        margin-botton: 15px;
      }
`;


export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;

@media screen and (max-width: 800px) {
    width: 30px;
    padding: 0px;
}

`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 70%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;


export const LogoSvg = styled(Logo)`
    width: 100px;
    height: 70px;
    fill: green;
`;