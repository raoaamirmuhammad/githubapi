import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import GistInfo from './Gist'

const Gists = () => {
  const baseURL = 'https://api.github.com'

  const [username, setUsername] = useState('');
  const [gists, setGists] = useState([])

  useEffect(() => {
    if(username.length < 2) return
    const url = `${baseURL}/users/${username}/gists`
    axios.get(url).then(res => setGists(res.data))
    console.log('gists',gists)
  }, [username])

  return(
    <Router>
      <Switch>
        <Route path="/:id" component={GistInfo}></Route>
      </Switch>
      <div className="header">Github API</div>
      <input className="search" onChange={(e) => setUsername(e.target.value)}></input>
      <div>{gists.length} gists found against usename <b>{username}</b></div>
      {gists.map((gist, idx) =>
        <Link to={gist.id} key={idx} className={`gist-info ${idx%2 !== 0 && 'odd'}`}>
          <img src={gist.owner.avatar_url} alt=""></img>
          <div>
            <b>{gist.owner.login}</b>
            <div>{gist.url}</div>
            <div className="languages">
              {gist.files && Object.keys(gist.files).map((key) =>
                <div className="language" key={key}>{gist.files[key].language}</div>
              )}
            </div>
          </div>
        </Link>
      )}
    </Router>
  )
}

export default Gists;
