import { useState } from "react";
import axios from "axios";
import './GetImage.css';
const GetImage = ({headers, description, url }) => {

    const [photo, setPhoto] = useState("");
    const [result, setResult] = useState([]);
    const searchImages = () => {

        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=zqIWbvnuAVeucXQj1JxxHdeqokdmllzJWptJx_2NTi8`)
            .then((response) => {
                console.log(response);
                setResult(response.data.results);
            })
    }
    const img1 = {
        width: "320px",
        height: "200px"
    }

    const mainDiv = {
        maxWidth: "340px"
    }
    const imgStyle = {
        height: "200px",
        width: "320px"

    }
    return (
        <>
            <div className="container">
                <div className="mb-3 text-center my-5">
                    <label for="search" className="form-label">Search Images</label>
                    <input type="text" className="form-control" id="search"
                        placeholder="Search Images" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                    <button type="button" className="btn btn-primary my-2" onClick={searchImages}>Search</button>
                </div>
            </div>
            <div className="container  my-5">
                <div className="row">
                    {
                        result.map((actualData) => {
                            return (
                                

                                <div className="card text-black mb-3  my-3 mx-3 px-2 py-2"
                style={mainDiv} key={actualData.id}>
                                    
                                    <img style={img1} src={actualData.urls.regular} alt="images"/>
                                    <p className="card-title  mt-1"><span  className="more">ID:</span>   {actualData.id}</p>
                                    <p className="card-title  mt-1"><span className="more">Bio:</span>   {actualData.user.bio }</p>
                                    <p className="card-title  mt-1"><span className="more">User name:</span>   {actualData.user.username}</p>
                                    <p className="card-title  mt-1"><span className="more">First name: </span>  {actualData.user.first_name}</p>
                                    <p className="card-title  mt-1"><span className="more">Last name:</span>   {actualData.user.last_name}</p>
                                    <p className="card-title  mt-1"><span className="more">alt_description: </span>  {actualData.alt_description}</p>
    
                                    <p className="card-title  mt-1"><span className="more">asset_type: </span>  {actualData.asset_type}</p>
                                    <p className="card-title  mt-1"><span className="more">Create Date/time: </span>  {actualData.created_at}</p>
                                    <p className="card-title  mt-1"><span className="more">height: </span>  {actualData.height}</p>
                                    <p className="card-title  mt-1"><span className="more">width: </span>  {actualData.width}</p>
                                    
                                    <p className="card-title  mt-1"><span className="more">Promoted date/time:</span>   {actualData.promoted_at}</p>
                                    <p className="card-title  mt-1"><span className="more">likes:  </span> {actualData.likes}</p>
                                    <p className="card-title  mt-1"><span className="more">total likes:</span>   {actualData.user.total_likes}</p>
                                    <p className="card-title  mt-1"><span className="more">total photo: </span>  {actualData.user.total_photos}</p>
                                    <p className="card-title  mt-1"><span className="more">Update date/time:</span>   {actualData.updated_at}</p>
                                    <p className="card-text"><span className="more">Instagram username: </span>   {actualData.user.instagram_username}</p>
                                    <p className="card-text"><span className="more">twitter username:</span>    {actualData.user.twitter_username}</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </>
    );
}
export default GetImage;