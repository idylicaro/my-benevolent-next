import styled, { css } from 'styled-components'
import { HouseFill, Signpost2Fill, Search } from '../../styles/icons'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
`

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const Avatar = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    max-width: 31px;
    height: auto;
    border-radius: 50%;
  }
`

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.outline};
  display: flex;
  justify-content: space-around;
  padding: 8px 0px;
  @media (min-width: 500px) {
    display: none;
  }

  img {
    width: 100%;
    max-width: 31px;
    height: auto;
    border-radius: 50%;
  }
`
const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.grey};
  &:hover,
  &.active {
    fill: ${({ theme }) => theme.colors.twitter};
  }
`

export const HomeIcon = styled(HouseFill)`
  ${iconCSS}
`
export const ForumIcon = styled(Signpost2Fill)`
  ${iconCSS}
`
export const SearchIcon = styled(Search)`
  ${iconCSS}
`
