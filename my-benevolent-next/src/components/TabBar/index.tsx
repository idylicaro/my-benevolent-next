import { useState } from 'react'
import {
  Container,
  LeftItens,
  RightItens,
  Logo,
  LoginBtn,
  HouseIcon,
  ForumIcon,
  SearchIcon,
  Avatar,
} from './styles'

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

export default function TabBar() {
  const [session, setSession] = useState()
  return (
    <>
      <Container>
        <LeftItens>
          <button className="active">
            <a href="/">
              <HouseIcon />
            </a>
          </button>
          <button>
            <a href="/">
              <ForumIcon />
            </a>
          </button>
        </LeftItens>
        <Logo>
          <span>Benevolent</span>
        </Logo>
        <RightItens>
          <button>
            <a href="/">
              <SearchIcon />
            </a>
          </button>
          <button>
            {session ? (
              <a href="/">
                <Avatar>
                  <img src="https://avatars.githubusercontent.com/u/45442467?s=460&u=164bc2580aa1c61531cc13c13ba746cbe4fe7ddf&v=4" />
                </Avatar>
              </a>
            ) : (
              <a href="/">
                <LoginBtn><span>Entrar</span></LoginBtn>
              </a>
            )}
          </button>
        </RightItens>
      </Container>
    </>
  )
}
