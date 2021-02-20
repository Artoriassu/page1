import img from '../assets/фон.png'
import styled from '@emotion/styled'
import asteroid from '../assets/asteroid.png'

export default function Asteroids() {

    const Main = styled.div`
    background-image: url(${img});
    background-size: 100vw 100vh;
    height: 100vh;
    `
    const AsterBlock = styled.div`
    line-height: 100vh;
    vertical-align: middle;
    text-align: center;
    `
    const Aster = styled.div`
    margin: 1vw;
    background-image:url(${asteroid});
    background-position: center center;
    background-size: 100% 100%;
    width: 18vw;
    height: 35vh;
    line-height: 35vh;
    display:inline-block;
    text-align: center;
    vertical-align:middle;
    font-size: 5vw;
    font-weight: 700;
    color: white;
    `
    return (
        <Main>
            <AsterBlock>
                <Aster>
                    <a> -3</a>
                </Aster>
                <Aster>
                    <a> -3</a>
                </Aster>
                <Aster>
                    <a> -3</a>
                </Aster>
            </AsterBlock>
        </Main>
    )
}