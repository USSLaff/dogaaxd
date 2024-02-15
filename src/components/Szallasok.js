import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Szallasok = ({ szallasok, setSzallasok,setFetchPending, isFetchPending , isLoggedIn}) => {
    const nav = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch('https://nodejs.sulla.hu/data')
            const data = await response.json()
            console.log(data)
            setSzallasok(data)
        } catch (error) {
            console.error(error)
        } finally {
            setFetchPending(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [isFetchPending])

    return (
        <div className='row container-fluid justify-content-center'>
            {
                isFetchPending ? <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <div className='spinner-border text-danger' />
                </div> :
                    szallasok.map(szallas => (
                        <div key={szallas.id} className="card m-3" style={{ width: '18rem' }}>
                            <Link className="card-body d-flex flex-column" to={"/single/"+szallas.id}>
                                <h5 className="card-title">{szallas.name}</h5>
                                <p className="card-text">{szallas.hostname}</p>

                                <hr/>
                                <p className="card-text">Város: {szallas.location}</p>
                                <p className="card-text">Minimum {szallas.minimum_nights}.</p>
                                <p className="card-text">Ár: {szallas.price} Ft.</p>
                            </Link>


                            {isLoggedIn ? <Link className='btn btn-danger mb-2' onClick={()=>{
                                if(isLoggedIn){
                                    axios.delete(`https://nodejs.sulla.hu/data/`+szallas.id).then(nav("/"));
                                    
                                    alert('Törlés sikeres.')
                                }else{
                                    alert("lol nem")
                                }
                            }} to={"/"}>Törlés</Link> : <div/>}
                            {isLoggedIn ? <Link className='btn btn-warning mb-2' to={"/put/"+szallas.id}>Módosítás</Link> : <div/>}

                        </div>
                    ))

            }
        </div>

    )
}

export default Szallasok