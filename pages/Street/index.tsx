import React from 'react'
// import cemaforo from '../src/assets/pics/streets/cemaforo.jpg'
import '../picsStyle.css'
import a from "../../src/assets/pics/street/junin hat_9.jpg"
import b from '../../src/assets/pics/street/cemaforo.jpg' 
import c from "../../src/assets/pics/street/motoman_7_11.jpg"
import d from "../../src/assets/pics/street/mesero cuba rgb _10.jpg"
import e from "../../src/assets/pics/street/P1070646_14.jpg"
import f from "../../src/assets/pics/street/espejos_7.jpg"
import g from "../../src/assets/pics/street/Three girls facing the sunset._18.jpg"
import h from "../../src/assets/pics/street/hombre tramway_8.jpg"
import i from "../../src/assets/pics/street/oldman on a bank_12.jpg"
import j from "../../src/assets/pics/street/bee_2.jpg"
import k from "../../src/assets/pics/street/cowboy_6.jpg"
import l from "../../src/assets/pics/street/colegiala LIBRE_5.jpg"
import m from "../../src/assets/pics/street/P1000694caicedo_13.jpg"
import n from "../../src/assets/pics/street/campesino peñol_2_4.jpg"
import o from "../../src/assets/pics/street/P1130040_53_15.jpg"
import p from "../../src/assets/pics/street/sdf_17.jpg"
import q from "../../src/assets/pics/street/P1130102_62_16.jpg"
import r from "../../src/assets/pics/street/Antioqueño_1.jpg"

const Street = () => {
  return (
    
    <div className="container-fluid">
        <div className="row">
              <div className="column">
              <img src={a} alt="bus with passengers" />
                  <img src={b} alt="bus with passengers" />
                  <img src={c} alt="old man in motorcycle on the road" />
                  <img src={d} alt="waiter waiting in the street" />
                  <img src={e} alt="woman walking in a parking" />
                  <img src={f} alt="mirrors and people reflections" />

              </div>
            <div className="column">
                  <img src={g}alt="3 girls silhouette walking with sunset background"/>
                  <img src={h} alt="men with suitcase next to Tramway"/>
                  <img src={i} alt="Poete old man sitting in on bank"/>
                  <img src={j} alt="woman wearing similar patterns with background"/>
                  <img src={k} alt="cool old man with hat eating icecream" />

            </div>
            <div className="column">
                <img src={l} alt="school girl walking, man staring" />
                <img src={m} alt="woman's back"/>
                <img src={n}alt="old man with poncho" />
                <img src={o} alt="woman sitting in a bank in sea background"/>
                <img src={p} alt="homeless man looking to his thought"/>
                <img src={q} alt="man sitting front of militar" />
                <img src={r} alt="bar with womens and man drinking" />
            </div>
        </div>
    </div>
  )
}

export default Street