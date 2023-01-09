import React from 'react'

function ModeSwitch(props) {
  return (
    <div className="d-flex form-check form-switch my-2">
        <div className="me-auto"></div>
        <input className="form-check-input me-2" onChange={props.handleModeSwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
    </div>
  )
}

export default ModeSwitch
