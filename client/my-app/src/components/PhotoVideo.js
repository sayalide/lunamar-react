import React from 'react';
import { Link } from 'react-router-dom';

function PhotoVideo(){

    return (
        <>



<Link to='/manage-service-resident'>Manage Service</Link>
                    <Link to='/manage-visitor-resident'>Manage Visitor</Link>
                    <Link to='/photo-video'>Upload Photo/video</Link>

                    <Link to='/chat-resident'>Chat</Link>

    <div>
        <form >
            <div>
              <label for="file">Choose file to upload</label>
              <input type="file" name="" id="" style={{marginleft: "50%" }}> </input> 
            </div>
            <div>
              <button>Submit</button>
            </div>
           </form>
    </div>
        </>
    );
}

export default PhotoVideo;