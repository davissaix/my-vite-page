import React from 'react'
import '../picsStyle.css'
import calafate from "../src/assets/pics/argentina/calafate III_1.jpg" 

const Argentina = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="column">
        <img src={calafate} alt ="calafate street" />
        <img src="../src/assets/pics/argentina/glaciar_5.jpg" alt="iceberg two"/>
       <img src="../src/assets/pics/argentina/glaciar II_4.jpg" alt ="iceberg" />
        <img src="../src/assets/pics/argentina/iguazu II_6.jpg" alt="iguazu waterfalls" />
        <img src="../src/assets/pics/argentina/cata-iguazu_3.jpg" alt ="iguazu monkey"/>
        
        
      </div>
      <div className="column">
        <img src="../src/assets/pics/argentina/ma-jeep_8.jpg" alt ="woman front of jeep" />
        <img src="../src/assets/pics/argentina/iguazu_7.jpg" alt ="men with suitcase next to Tramway"/>
        <img src="../src/assets/pics/argentina/mico-iguazu_9.jpg" alt ="iguazu monkey"/>
        <img src="../src/assets/pics/argentina/tango-couple_12.jpg" alt ="iguazu monkey"/>
      
        
      </div>
      <div className="column">
        <img src="../src/assets/pics/argentina/patagonia_11.jpg" alt = "calafate nature" />
        <img src="../src/assets/pics/argentina/tango-couple2_13.jpg" alt ="tango couple" />
        <img src="../src/assets/pics/argentina/tango_14.jpg" alt="man playing acordeon"/>
        <img src="../src/assets/pics/argentina/mico_10.jpg" alt="iguazu monkey two" />
       
       
      </div>
    </div>
  </div>
  )
}

export default Argentina