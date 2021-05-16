import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './GistInfo.scss'

const GistInfo = () => {
  let { id } = useParams();
  const baseURL = 'https://api.github.com'

  const [gistInfo, setGistInfo] = useState('');

  useEffect(() => {
    const url = `${baseURL}/gists/${id}`
    axios.get(url).then(res => setGistInfo(res.data))
  }, [id])
  return(
    <div>
      <div className="files">
        <div className="head">Files</div>
        {gistInfo.files && Object.keys(gistInfo.files).map((filename, idx) =>
          <div className='file'>
            <b>{gistInfo.files[filename].filename}</b>
            <div>{gistInfo.files[filename].type}</div>
            <div>{gistInfo.files[filename].language}</div>
            <hr />
          </div>
        )}
      </div>

    </div>
  )
}

export default GistInfo;
