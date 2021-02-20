import Link from 'next/link';
import styled from '@emotion/styled'
import img from '../assets/фон.png'
export default function Home() {
  const Men = styled.div`
  background-image: url(${img});
    background-size: 100vw 100vh;
    height: 100vh;
  `
  const MenuBlock = styled.div`
  position: absolute;
    min-width: 20vw;
    min-height: 10vh;
    margin-top: 45vh;
    margin-left: 40vw;
  `
  const MenuOption = styled.div`
    width: 15vw;
    min-heigth: 15vh;
    text-align: center;
    border:1px solid blue;
    background-color:lightblue;
    font-size: 2vh;
    :hover{
    font-size: 3vh;
    }
  `
  return (
    <Men>
      <MenuBlock>
        <div>
          <Link href="/optionsMenu">
            <MenuOption>
              <a>Настройки</a>
            </MenuOption>
          </Link>
        </div>
        <div>
          <Link href="/stars">
            <MenuOption>
              <a>Звёзды</a>
            </MenuOption>
          </Link>
        </div>
        <div>
          <Link href="/asteroids">
            <MenuOption>
              <a>Астероиды</a>
            </MenuOption>
          </Link>
        </div>
      </MenuBlock>
    </Men>
  )
}
