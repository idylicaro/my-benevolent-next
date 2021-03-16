import styled from 'styled-components'

import { HouseFill, Signpost2Fill, Search } from '../../styles/icons'

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;

  button {
    border: none;
    height: 100%;
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

  @media(max-width:500px){
    justify-content:center
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
  @media(max-width:500px){
    display:none;
  }
`
export const RightItens = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 10px;
  @media(max-width:500px){
    display:none;
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
