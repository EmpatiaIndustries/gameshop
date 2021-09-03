import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {

    const [handleBurger, sethandleBurger] = useState(false)

    return (
        <div>
            <StyledNav>
                <LeftSideContainer>
                    <h1>LOGO</h1>
                    <ul>
                        <Link to="/"><li>Inicio</li></Link>
                        <Link to="/catalogo"><li>catalogo</li></Link>
                        <Link to="/about"><li>sobre nosotros</li></Link>
                    </ul>
                </LeftSideContainer>
                <RightSideContainer>
                    <div className="RightSideContainerContent">
                        <FontAwesomeIcon className="searchIcon" icon={faSearch} size="lg" />
                        <input type="text" placeholder="Buscar..." />
                        <Link to="/carrito">
                            <StaticImage
                                className="coin"
                                src="../images/navcoin.png"
                                alt=""
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </RightSideContainer>
            </StyledNav>
            <BurgerIcon>
                {handleBurger ?
                    <FontAwesomeIcon
                        onClick={() => sethandleBurger(!handleBurger)}
                        icon={faTimesCircle}
                        size="2x"
                    />
                    : <FontAwesomeIcon
                        onClick={() => sethandleBurger(!handleBurger)}
                        icon={faBars}
                        size="2x"
                    />}
            </BurgerIcon>
            {/* BURGER MENU */}
            {handleBurger ? <OOFocus onClick={() => sethandleBurger(false)}></OOFocus> : null}
            <BurgerMenu isOpen={handleBurger}>
                <ul>
                    <Link to="/carrito"><li className="carrito">Carrito</li></Link>
                    <div className="Line" />
                    <Link to="/"><li>INICIO</li></Link>
                    <div className="Line" />
                    <Link to="/catalogo"><li>CATALOGO</li></Link>
                    <div className="Line" />
                    <Link to="/about"><li>SOBRE NOSOTROS</li></Link>
                </ul>
            </BurgerMenu>
        </div>
    )
}

export default Navbar

const StyledNav = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    background-color: #FE5656;
    font-family: 'Roboto Slab', serif;
    font-weight: 900;
    z-index: 11;
`;

const LeftSideContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Roboto Slab', serif;
    font-weight: 900;

    h1{
        margin: 11px 0 11px 35px;;
    }

    ul{
        position: relative;
        top: 23px;
        left: 10px;
    }

    li{
        display: inline;
        margin: 0 10px;
        @media (max-width: 784px) {
            display: none;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        background-color: #9b0000;
        color: white;
        border-radius: 5px;
        transition: 0.5s;
    }
`;

const RightSideContainer = styled.div`

    position: relative;
    top: 12px;

    input{
        border: none;
        border-radius: 6px;
        margin: 0 20px;
        padding: 7px  0px 10px 40px;
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
        box-sizing: border-box;
        outline: none;
    }

    input:focus{
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
        box-shadow: 0 0 8px 0 black;
        transition: 0.2s ease-in;
    }

    .searchIcon{
        position: absolute;
        right: 300px;
        top: 9px;
    }

    .coin{
        margin-right: 20px;
    }

    .coin:hover{
        animation: flip 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;

            @keyframes flip {
            from {
                transform: rotateY(0deg);
            }
            to {
                transform: rotateY(360deg);
            }    
        }
    }

    .RightSideContainerContent{
        @media (max-width: 784px) {
            display: none;
        }
    }
    
`;

const BurgerIcon = styled.div`
        z-index: 14;
        position: absolute;
        right: 35px;
        top: 22px;

        @media (min-width: 785px) {
            display: none;
        }
`;

const BurgerMenu = styled.div`

    z-index: 13;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
    float: right;
    background: rgb(254,86,86);
    background: linear-gradient(90deg, rgba(254,86,86,1) 0%, rgba(245,81,81,1) 80%, rgba(233,78,78,1) 88%);
    height: 100%;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40% 0 0 20%;
    font-family: 'Roboto Slab', serif;
    font-weight: 900;
    transition: 0.3s ease-in;

    ul{
        padding: 0;
        text-align: center;
        margin-bottom: 50px;
    }

    a{
        text-decoration: none;
        align-content: center;
    }

    li{
        list-style: none;
        margin: 18px 0;
        padding: 30px 0;
        color: black;
    }


    .Line{
        background-color: black;
        padding-top: 2px;
        margin: 0 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

`;

const OOFocus = styled.div`
    z-index: 12;
    position: fixed;
    width: 100%;
    height: 100vh;
`;