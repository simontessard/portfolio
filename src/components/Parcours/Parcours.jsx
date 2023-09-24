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
            <p>2023 - 2024 </p>
            <p>
              <span>Bac+5 en alternance :</span> Master « Développeur Full-Stack - Java et Angular »
              chez OpenClassRooms
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="parcours-item">
            <p>2022 - 2023 </p>
            <p>
              <span>Bac+3/4 :</span> Bachelor « Développeur d'Applications - Javascript React » chez
              OpenClassRooms
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="parcours-item">
            <p>2019 - 2021 </p>
            <p>
              <span>Bac+2 :</span> Brevet de Technicien Supérieur de Services Informatiques aux
              Organisations (SIO) au Lycée Victor et Hélène Basch (VHB) à Rennes
            </p>
            <p>Option: Solutions Logicielles et Applications Métiers (SLAM)</p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Parcours
