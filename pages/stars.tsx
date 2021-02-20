import img from '../assets/фон.png'
import styled, { keyframes } from 'styled-components'
import star from '../assets/star.png'

export default function Stars() {

    const Main = styled.div`
    background-image: url(${img});
    background-size: 100vw 100vh;
    height: 100vh;
    `
    const StarFall = keyframes`
    0% {
        bottom: 100vh;
    }
    100% {
        bottom: 0vh;
    }
    `
    const Star = styled.div`
        position: absolute;
        background-image: url(${star});
        background-position: center center;
        background-size: 100% 100%;
        width: 12vw;
        height: 23vh;
        animation-name: ${StarFall};
        animation-duration: 7s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    
        &:nth-child(1) {
            left: 30vw;
        }
        &:nth-child(2) {
            left: 60vw;
            animation-duration: 5s;
        }
    
    `
    return (
        <Main>
            <div>
                <Star>
                </Star>
                <Star>
                </Star>
            </div>
        </Main>
    )
}