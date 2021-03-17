import { useState } from 'react'
import {
  Container,
  Wrapper,
  BottomMenu,
  HomeIcon,
  ForumIcon,
  SearchIcon,
  Avatar,
} from './styles'

import TabBar from '../../components/TabBar'

interface Session {
  user: {
    name: string
    imgURL: string
  }
}

const sessionFake: Session = {
  user: {
    name: 'idylicaro',
    imgURL:
      'https://avatars.githubusercontent.com/u/45442467?s=460&u=164bc2580aa1c61531cc13c13ba746cbe4fe7ddf&v=4',
  },
}

export default function Layout() {
  const [session, setSession] = useState(sessionFake)
  return (
    <>
      <Container>
        <TabBar />
        <Wrapper></Wrapper>
        <BottomMenu>
          <HomeIcon className="active" />
          <ForumIcon />
          <SearchIcon />
          {session ? (
            <a href="/">
              <Avatar>
                <img src="https://avatars.githubusercontent.com/u/45442467?s=460&u=164bc2580aa1c61531cc13c13ba746cbe4fe7ddf&v=4" />
              </Avatar>
            </a>
          ) : (
            <a href="/">
              <Avatar>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.macrumors.com%2Fhow-to%2Fcreate-guest-account-macos%2F&psig=AOvVaw0ICYLpnfQ0OLEFx0rTNtc0&ust=1616094510264000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDjlqyDuO8CFQAAAAAdAAAAABAI" />
              </Avatar>
            </a>
          )}
        </BottomMenu>
      </Container>
    </>
  )
}
