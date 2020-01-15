import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_user">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnias</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number"
                name="latitude"
                id="latitude"
                required value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitude"
                id="longitude"
                required value={longitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpv4-1.fna.fbcdn.net/v/t1.0-9/23844636_1961214077539405_8281318683202728329_n.jpg?_nc_cat=109&_nc_ohc=8sLlQSAW9v0AX_vIr1v&_nc_ht=scontent.fcpv4-1.fna&oh=265a7b940cbb99cf705baec7682c4687&oe=5EAA0A43" alt="ManoMax"/>
              <div className="user-info">
                <strong>ManoMax</strong>
                <span>JS, Java, Python</span>
              </div>
            </header>
            <p>Programming since 2017 ....................................................................... Perfil Photo by: @EuclidesRamos .</p>
            <a href="https://github.com/ManoMax">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpv4-1.fna.fbcdn.net/v/t1.0-9/23844636_1961214077539405_8281318683202728329_n.jpg?_nc_cat=109&_nc_ohc=8sLlQSAW9v0AX_vIr1v&_nc_ht=scontent.fcpv4-1.fna&oh=265a7b940cbb99cf705baec7682c4687&oe=5EAA0A43" alt="ManoMax"/>
              <div className="user-info">
                <strong>ManoMax</strong>
                <span>JS, Java, Python</span>
              </div>
            </header>
            <p>Programming since 2017 ....................................................................... Perfil Photo by: @EuclidesRamos .</p>
            <a href="https://github.com/ManoMax">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpv4-1.fna.fbcdn.net/v/t1.0-9/23844636_1961214077539405_8281318683202728329_n.jpg?_nc_cat=109&_nc_ohc=8sLlQSAW9v0AX_vIr1v&_nc_ht=scontent.fcpv4-1.fna&oh=265a7b940cbb99cf705baec7682c4687&oe=5EAA0A43" alt="ManoMax"/>
              <div className="user-info">
                <strong>ManoMax</strong>
                <span>JS, Java, Python</span>
              </div>
            </header>
            <p>Programming since 2017 ....................................................................... Perfil Photo by: @EuclidesRamos .</p>
            <a href="https://github.com/ManoMax">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpv4-1.fna.fbcdn.net/v/t1.0-9/23844636_1961214077539405_8281318683202728329_n.jpg?_nc_cat=109&_nc_ohc=8sLlQSAW9v0AX_vIr1v&_nc_ht=scontent.fcpv4-1.fna&oh=265a7b940cbb99cf705baec7682c4687&oe=5EAA0A43" alt="ManoMax"/>
              <div className="user-info">
                <strong>ManoMax</strong>
                <span>JS, Java, Python</span>
              </div>
            </header>
            <p>Programming since 2017 ....................................................................... Perfil Photo by: @EuclidesRamos .</p>
            <a href="https://github.com/ManoMax">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
