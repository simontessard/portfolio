import Heading from '../../components/Heading/Heading'
import { Reveal } from '../utils/Reveal/Reveal'

import './parcours.css'

function Parcours() {
  return (
    <div className="parcours-container">
      <Heading beforeText="" italicText="PAR" afterText="COURS" margin={false} />
      <div className="parcours-list">
        <Reveal>
          <div className="parcours-item">
            <p>2022 - 2023 </p>
            <p>Bachelor OpenClassRooms - Développeur d'Applications - Javascript React</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="parcours-item">
            <p>2019 - 2021 </p>
            <p>
              Brevet de Technicien Supérieur de Services Informatiques aux Organisations (SIO) au
              Lycée Victor et Hélène Basch (VHB) – Rennes Option: Solutions Logicielles et
              Applications Métiers (SLAM)
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Parcours
