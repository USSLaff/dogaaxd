import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export const Szallas = ({isLoggedIn}) => {

    const navigate = useNavigate();
    const param = useParams();

    console.log(isLoggedIn)

    const [szallas, setSzallas] = useState();

    const [isFetchPending, setFetchPending] = useState(true)

    const fetchData = async () => {
        await axios.get(`https://nodejs.sulla.hu/data/${param.id}`).then(async (response) => {
            await setSzallas(response.data);
        }).finally(() => setFetchPending(false));
    }

    console.log(szallas)

    useEffect(() => {
        fetchData();
    }, [isFetchPending]);

    return (
        <div className='row container-fluid justify-content-center'>
            {
                isFetchPending ?
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                        <div className='spinner-border text-danger' />
                    </div>
                    :
                    <div key={szallas.id} className="card m-3" style={{ width: '18rem' }}>
                        <div className="card-body d-flex flex-column" to={"/single"}>
                            <h5 className="card-title">{szallas.name}</h5>
                            <p className="card-text">{szallas.hostname}</p>

                            <hr />
                            <p className="card-text">Város: {szallas.location}</p>
                            <p className="card-text">Minimum {szallas.minimum_nights}.</p>
                            <p className="card-text">Ár: {szallas.price} Ft.</p>
                        </div>

                        <Link className='btn btn-warning mb-2' to={"/"}>Vissza</Link>
                        {isLoggedIn ? <button className='btn btn-danger mb-2'>Törlés</button> : <div />}
                        {isLoggedIn ? <Link className='btn btn-warning mb-2' to={"/put/" + szallas.id}>Módosítás</Link> : <div />}

                    </div>


            }
        </div>

    )
}
