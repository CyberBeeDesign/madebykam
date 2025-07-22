import React from 'react'
import ChartPie from '../../assets/ChartPie.png'
import './Designcode.css'


const Designcode = () => {
  return (
    <div className='designcode-container'>
        <div className='designblock'>
            <h2>Design</h2>
            <p>
                Wireframe — Sketch so it&apos;s not a mess later.<br />
                UX Design — Stop users from rage-quitting.<br />
                UI Design — Pick buttons, then rethink them.<br />
                User Testing — Watch users do the unexpected.<br />
                Prototype — Fake clicks to test the flow.<br />
            </p>
        </div>

        <img src={ChartPie} alt="ChartPie" />

        <div className='codeblock'>
            <h2>Code</h2>
            <p>
              Plan — Make it up as I go along.<br />
              Write — Write code that only I understand.<br />
              Debug — Fix one bug, create three more.<br />
              Test — Break it on purpose to fix it better.<br />
              Deploy — Push it live and pray it works.<br />
            </p>
        </div>
    </div>
  )
}

export default Designcode
