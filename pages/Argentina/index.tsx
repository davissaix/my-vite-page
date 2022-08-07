import React from 'react'
import '../picsStyle.css'
import a from "../../src/assets/pics/argentina/calafate III_1.jpg" 
import b from "../../src/assets/pics/argentina/glaciar_5.jpg"
import c from "../../src/assets/pics/argentina/glaciar II_4.jpg" 
import d from "../../src/assets/pics/argentina/iguazu II_6.jpg" 
import e from "../../src/assets/pics/argentina/cata-iguazu_3.jpg" 
import f from "../../src/assets/pics/argentina/ma-jeep_8.jpg"
import g from "../../src/assets/pics/argentina/iguazu_7.jpg" 
import h from "../../src/assets/pics/argentina/mico-iguazu_9.jpg"
import i from "../../src/assets/pics/argentina/tango-couple_12.jpg" 
import j from "../../src/assets/pics/argentina/patagonia_11.jpg" 
import k from "../../src/assets/pics/argentina/tango-couple2_13.jpg" 
import l from "../../src/assets/pics/argentina/tango_14.jpg" 
import m from "../../src/assets/pics/argentina/mico_10.jpg"

const Argentina = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="column">
        <img src={a} alt ="calafate street" />
        <img src={b} alt="iceberg two"/>
       <img src={c} alt ="iceberg" />
        <img src={d}alt="iguazu waterfalls" />
        <img src={e} alt ="iguazu monkey"/>
        
        
      </div>
      <div className="column">
        <img src={f} alt ="woman front of jeep" />
        <img src={g} alt ="men with suitcase next to Tramway"/>
        <img src={h} alt ="iguazu monkey"/>
        <img src={i} alt ="iguazu monkey"/>
      
        
      </div>
      <div className="column">
        <img src={j} alt = "calafate nature" />
        <img src={k} alt ="tango couple" />
        <img src={l} alt="man playing acordeon"/>
        <img src={m} alt="iguazu monkey two" />
       
       
      </div>
    </div>
  </div>
  )
}

export default Argentina