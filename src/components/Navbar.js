import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginModal from './LoginModal'


const Navbar = ({ setFetchPending, loggedIn, SetLoggedIn, isLoggedIn }) => {

    const nav = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid flex-row bd-highlight">
                    <Link aria-current="page" className="navbar-brand border-right" to="/">xd</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        {isLoggedIn ?

                            
                            <div className="navbar-nav m-2" role='button' onClick={()=>{
                               SetLoggedIn(false);
                               nav("/");  
                               alert("Sikeres kijelentkezés.");
                               
                            }}>
                                Kijelentkezés
                            </div>
                            :
                            <div className="navbar-nav " role='button' data-bs-toggle="modal" data-bs-target="#loginModal">
                                Bejelentkezés
                            </div>

                        }
                        {isLoggedIn ?
                            <Link  className="navbar-nav " role='button' to={"/post"}> 
                                Új szállás
                            </Link>
                            :
                            <div />
                        }
                    </div>




                </div>

            </nav>

            
        </div>

    )
}

export default Navbar