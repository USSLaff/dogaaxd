import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddSzallas = ({isLoggedIn }) => {

    const nav = useNavigate();

    return (

        <div className='container w-25 mt-5 border border-2 p-2 rounded-3'>
            <form onSubmit={async (e) => {
                e.preventDefault();
                e.persist();



                const name = e.target.name.value
                const hostname = e.target.hostname.value
                const location = e.target.location.value
                const price = e.target.price.value
                const minimum_nights = e.target.minimum_nights.value



                const postData = {

                    name: name,
                    hostname: hostname,
                    location: location,
                    price: price,
                    minimum_nights: minimum_nights
                }
                console.log(postData)

                if (isLoggedIn) {
                    await axios.post('https://nodejs.sulla.hu/data', postData).then(async () => {

                    });
                } else {
                    alert("lol nem")
                }


                nav("/");
            }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Név</label>
                    <input type="text" className="form-control" id="name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="hostname" className="form-label">Host név</label>
                    <input type="text" className="form-control" id="hostname" />
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Hely</label>
                    <input type="text" className="form-control" id="location" />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Ár</label>
                    <input type="number" className="form-control" id="price" />
                </div>

                <div className="mb-3">
                    <label htmlFor="minimum_nights" className="form-label">Minimum éjszakák</label>
                    <input type="number" className="form-control" id="minimum_nights" />
                </div>
                <div className="modal-footer">
                    <Link type="button" className="btn btn-secondary" to={"/"}>Mégse</Link>
                    <button type="submit" className="btn btn-primary">Feltöltés</button>
                </div>
            </form>
        </div>
    )
}

export default AddSzallas;