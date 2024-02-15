import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const EditSzallas = ({ setFetchPending, isLoggedIn }) => {
    const navigate = useNavigate();
    const param = useParams();

    const [formPendingFetch, setFormPendingFetch] = React.useState(true)
    const [szallas, setSzallas] = useState();

    const [name, setName] = useState("")
    const [hostname, setHost] = useState("")
    const [price, setPrice] = useState("")
    const [minNight, setNight] = useState("")
    const [area, setArea] = useState("")


    const fetchData = async () => {
        await axios.get(`https://nodejs.sulla.hu/data/${param.id}`).then(async (response) => {
            await setSzallas(response.data);

            setName(response.data.name);
            setHost(response.data.hostname);
            setPrice(response.data.price);
            setNight(response.data.minimum_nights);
            setArea(response.data.location);



        }).finally(() => setFormPendingFetch(false));
    }

    useEffect(() => {
        fetchData();
    }, [formPendingFetch]);

    const Name = (e) => {
        setName(e.target.value)
    }

    const host = (e) => {
        setHost(e.target.value)
    }

    const loc = (e) => {
        setArea(e.target.value)
    }

    const nigh = (e) => {
        setNight(e.target.value)
    }
    const pric = (e) => {
        setPrice(e.target.value)
    }


    return (
        <div className='container w-25 mt-5 border border-2 p-2 rounded-3'>
            <form onSubmit={async (e) => {
                e.preventDefault();
                e.persist();





                const postData = {

                    name: name,
                    hostname: hostname,
                    location: area,
                    price: price,
                    minimum_nights: minNight
                }

                if  (isLoggedIn){
                
                await axios.put(`https://nodejs.sulla.hu/data/${param.id}`, postData).then(async () => {
                    await setFetchPending(true);
                    navigate('/');
                });}
                else{
                    alert("lol nem")
                }

            }}>
                <div className="mb-3">
                    <label htmlFor="putNev" className="form-label">Név</label>
                    <input onChange={Name} type="text" className="form-control" id="putNev" defaultValue={name} />
                </div>

                <div className="mb-3">
                    <label htmlFor="putHost" className="form-label">Host név</label>
                    <input onChange={host} type="text" className="form-control" id="putHost" defaultValue={hostname} />
                </div>

                <div className="mb-3">
                    <label htmlFor="putLocation" className="form-label">Hely</label>
                    <input onChange={loc} type="text" className="form-control" id="putLocation" defaultValue={area} />
                </div>

                <div className="mb-3">
                    <label htmlFor="putNights" className="form-label">Minimum éjszakák</label>
                    <input onChange={nigh} type="text" className="form-control" id="putNights" defaultValue={minNight} />
                </div>

                <div className="mb-3">
                    <label htmlFor="putPrice" className="form-label">Ár</label>
                    <input onChange={pric} type="number" className="form-control" id="putPrice" defaultValue={price} />
                </div>

                <button type="submit" className="btn btn-success me-2">Mentés</button>
                <Link type="button" className="btn btn-warning" to="/">Vissza</Link>

            </form>
        </div>
    )
}
