import { Container, Wrapper, BottomMenu, HomeIcon, ForumIcon, SearchIcon, Avatar } from './styles'

import TabBar from '../../components/TabBar'

export default function Layout() {
  return (
    <>
      <Container>
        <TabBar />
        <Wrapper></Wrapper>
        <BottomMenu>
          <HomeIcon className="active" />
          <ForumIcon />
          <SearchIcon />
          <a href="/">
              <Avatar>
                <img src="https://avatars.githubusercontent.com/u/45442467?s=460&u=164bc2580aa1c61531cc13c13ba746cbe4fe7ddf&v=4" />
              </Avatar>
          </a>
        </BottomMenu>
      </Container>
    </>
  )
}

