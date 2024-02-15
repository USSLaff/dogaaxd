import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.json';

import { useState, useEffect } from 'react';


import * as bootstrap from 'bootstrap'
import { Link, useNavigate } from 'react-router-dom'
window.bootstrap = bootstrap;

const LoginModal = ({ SetLoggedIn, loggedIn }) => {

    const nav = useNavigate();

    return (
        <div className="modal fade " id="loginModal" tabIndex="-1" aria-labelledby="loginModallb" aria-hidden="true">
            <form onSubmit={async (e) => {
                e.preventDefault();
                e.persist();

                const name = e.target.UsernameInput.value
                const pw = e.target.PasswordInput.value


                

                if (name === "admin" && pw === "admin") {
                    SetLoggedIn(true)
                    nav("/");
                    alert("Sikeres bejelentkezés.");
                    
                    
                } else {
                    alert("Hibás bejelentkezési adatok.");
                }

            }}>
                <div className="modal-dialog">
                    <div className="modal-content p-2">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModallb">Bejelentkezés</h5>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pizzaNev" className="form-label">Felhasználónév</label>
                            <input type="text" placeholder='admin' className="form-control" id="UsernameInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pizzaKepURL" className="form-label">Jelszó</label>
                            <input type="password" placeholder='admin' className="form-control" id="PasswordInput" />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Vissza</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Bejelentkezés</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginModal