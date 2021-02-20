import { useState } from 'react'
import img from '../assets/фон2.png'
import cabine from '../assets/cabine.png'
import styled from '@emotion/styled'

export default function OptionsMenu() {

    const Main = styled.div`
    background-image: url(${img});
      background-size: 100vw 100vh;
      height: 100vh;
    `
    const Cabine = styled.div`
    background-image: url(${cabine});
      background-size: 100vw 100vh;
      height: 100vh;
    `
    const Name = styled.div`
    text-align: center;
    font-size: 7vh;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    padding-top: 3vh;
    `
    const OptionsBlock = styled.div`
    position: absolute;
    display: grid;
    left: 30vw;
    top: 30vh;
    grid-template-columns: 21vw 21vw;
    grid-template-rows: 17vh 17vh;
    font-weight: 800;
    `
    const Option = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    text-align: center;
    height: 15vh;
    width: 20vw;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 40px;
    `
    const OptionName = styled.div`
    padding-top: 2vh;
    padding-bottom: 0.8vh;
    text-transform: uppercase;
    font-size: 2.7vh;
    font-weight: 900;
    color: #371548;
    `
    const IndicatorsBlock = styled.div`
    margin-left: 1.5vw;
    `
    const Indicators = styled.ul`
    max-width: 17vw;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    font-size: 2.2vh;

    li {
        flex: 1;
        text-align: center;
    }
    `
    const InputBlock = styled.div`
    input {
        outline:none;
        min-width: 16vw;
        -webkit-appearance: none;
        height: 2vh;
        padding: 0;
        border-radius: 10px;
        background: linear-gradient(90deg, rgb(255, 255, 255) 50%, #FDD207 0%);
       
        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            box-sizing: content-box;
            width: 0.5vw;
            height: 0.5vw;
            cursor: pointer;
            border: 0.4vw solid #FDD207;
            border-radius: 30px;
            background-color: black;
        }
    }
    `
    const LastBlock = styled.div`
    padding-top: 5vh;

    input {
        border: none;
        border-radius: 50px;
        margin-left: 1vh;
        margin-right: 1vh;
        min-height: 4vh;
        outline: none;
        vertical-align: middle;
        line-height: 4vh;

        ::-webkit-inner-spin-button, .lastBlock input::-webkit-outer-spin-button {
            min-width: 2vh;
            min-height: 2vh;
        }
    }
    a:first-child {
        vertical-align: top;
    }
    a:last-child {
        font-size: 2vh;
        vertical-align: middle;
    }
    `
    let [count, setCount] = useState(3);

    return (
        <Main>
            <Cabine>
                <Name>
                    Панель управления
                </Name>
                <OptionsBlock>
                    <Option>
                        <OptionName><a>Разрядность</a></OptionName>
                        <IndicatorsBlock>
                            <Indicators>
                                <li>1</li>
                                <li>10</li>
                                <li>100</li>
                                <li>1000</li>
                                <li>10000</li>
                            </Indicators>
                        </IndicatorsBlock>
                        <InputBlock>
                            <input type="range" min="1" max="5" value={count} step="1"
                                onChange={(e) => setCount(3)} />
                        </InputBlock>
                    </Option>
                    <Option>
                        <OptionName><a>Переходы</a></OptionName>
                        <IndicatorsBlock>
                            <Indicators>
                                <li>Без</li>
                                <li>5</li>
                                <li>10</li>
                            </Indicators>
                        </IndicatorsBlock>
                        <InputBlock>
                            <input type="range" min="1" max="5" value={count} step="1"
                                onChange={(e) => setCount(3)} />
                        </InputBlock>
                    </Option>
                    <Option>
                        <OptionName><a>Количество действий</a></OptionName>
                        <IndicatorsBlock>
                            <Indicators>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>12</li>
                                <li>15</li>
                                <li>18</li>
                            </Indicators>
                        </IndicatorsBlock>
                        <InputBlock>
                            <input type="range" min="1" max="5" value={count} step="1"
                                onChange={(e) => setCount(3)} />
                        </InputBlock>
                    </Option>
                    <Option>
                        <LastBlock>
                            <a>Скорость</a>
                            <input type="number" id="speed" min="1" max="5" value="1" step="1" />
                            <a>сек.</a>
                        </LastBlock>
                    </Option>
                </OptionsBlock>
            </Cabine>
        </Main>
    )
}