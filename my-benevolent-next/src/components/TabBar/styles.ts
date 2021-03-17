import styled from 'styled-components'

import { HouseFill, Signpost2Fill, Search } from '../../styles/icons'

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  width: 100%;
  height: 65px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    height: 65px;
    width: 100%;
    display: block;
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
  }

  button.active {
    background: ${(props) => props.theme.colors.header_button_active};
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #7d3a5e;

  > span {
    font-family: 'Great Vibes', Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 4vw;
    line-height: 1.3rem;
  }
`
export const LoginBtn = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80;
  background: ${(props) => props.theme.colors.header_button_active};
  border-radius: 2px;

  span {
    padding: 0 0.7vw;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center; 
    color: ${props => props.theme.colors.white};
  }
`
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 100%;
    max-width: 40px;
    height: auto;
    border-radius: 50%;
  }
`

export const LeftItens = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  @media (max-width: 500px) {
    display: none;
  }
`
export const RightItens = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 10px;
  @media (max-width: 500px) {
    display: none;
  }
`

export const HouseIcon = styled(HouseFill)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.colors.white};
`
export const ForumIcon = styled(Signpost2Fill)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.colors.white};
`
export const SearchIcon = styled(Search)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.colors.white};
`
