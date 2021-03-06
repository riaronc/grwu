import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import myFunc from "./jsfront";

function Header(props) {

    const [headerWhite, setHeaderWhite] = useState(false);
    const [navbarOpened, changeNavbarOpened] = useState(false);
    let locationOut = useLocation().pathname;

    useEffect(() => {
        myFunc();
        handleRoutingNavbar();
        //handleRoutingNavbarMini();
    }, [locationOut]);



    const handleToggleNavbar = () => {

        changeNavbarOpened(!navbarOpened);
        if (!navbarOpened){
            setHeaderWhite(true);
        }
        else if (navbarOpened){
            setHeaderWhite(false);
        }
    }


    const handleRoutingNavbar = () => {

        let location = locationOut;

        if (location === '/faq'){
            setHeaderWhite(true);
        }
        else if(!navbarOpened){
            setHeaderWhite(false);
        }
    }

    const handleRoutingNavbarMini = () => {
        let location = locationOut;
        if (location === '/faq'){
            setHeaderWhite(true)
        }

    }

    return(
        <div className={locationOut === '/givetoys' ? 'd-none' : ''}>
        <nav className={headerWhite ? 'nav-white': ''}>
            <div className="container text-sm-center text-md-center">
                <div className="show-menu-btn d-sm text-center text-white float-left" id="toogleMenuBtn" onClick={() => handleToggleNavbar()}>
				<span className={navbarOpened ? "d-none" : "open-menu"}>
                    <img src="img/menu-dark.svg" alt="" className={headerWhite ? '' :'d-none'}/>
					<img src={"./img/menu.svg"} alt="" className={headerWhite ? 'd-none' : ''}/><br />
					<p className={headerWhite ? 'text-purple' :''} > Меню </p>
				</span>
                <span className={navbarOpened ? "close-menu" : "d-none"}>
					<img src="./img/close-menu.svg" alt="" /><br />
					<p className="text-purple">Закрити</p>
				</span>
                </div>
                <div className="navbar-logo">
                    <Link to={'/'} onClick={() => handleRoutingNavbar()}>
                    <a href="">
                        <img src={"./img/black-logo.svg"} alt="" className={headerWhite ? "logo-light" : 'logo-light d-none'} />
                        <img src="./img/logo.svg" alt="" className={headerWhite ? 'logo-light d-none' : "logo-dark"} />
                    </a>
                    </Link>
                </div>
                <div className="lg-nav">
                    <ul>
                        <li className={headerWhite? 'nav-link-purple': 'nav-link'}>
                            <a href="growithyou.com">Каталог іграшок</a>
                        </li>
                        <li className={headerWhite? 'nav-link-purple': 'nav-link'}>
                            <Link to={'/about'} onClick={() => handleRoutingNavbar()}><a href="">Про нас</a></Link>
                        </li>
                        <li className={headerWhite ? 'nav-link-purple': 'nav-link'}>
                            <Link to={'/faq'} onClick={()=>handleRoutingNavbar()}><a href="">Популярні запитання</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="cart float-right text-center text-white">
                    <img src="./img/cart-white.svg" alt="" className={headerWhite ? "d-none" :"d-lg"} />
                    <img src="./img/bag.svg" alt="" className={headerWhite ? "d-none" : "d-sm bag-dark"} />
                    <img src="./img/black-bag.svg" alt="" className={headerWhite ? "d-none bag-light" : "d-none"} />
                    <img src="img/bag-dark.svg" alt="" className={headerWhite ? "bag-dark  d-lg" : "d-none" }/>
                    <img src="img/black-bag.svg" alt="" className={headerWhite ? "d-sm" : "d-none"} /><br />
                    <p className={headerWhite ? "d-sm text-purple" : "d-sm text-white" }>Кошик</p>

                </div>
            </div>
        </nav>
            <div className={navbarOpened ? "sm-nav" : "d-none"}>
                <div className="container">
                    <ul>
                        <li>
                            <Link to={'/'}><a href="">Головна сторінка</a></Link>
                        </li>
                        <li>
                            <a href="growithyou.com">Каталог іграшок</a>
                        </li>
                        <li>
                            <Link to={'/about'}><a href="">Про нас</a></Link>
                        </li>
                        <li>
                            <Link to={'/faq'} onClick={() => handleRoutingNavbarMini()}><a href="">Популярні запитання</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;
