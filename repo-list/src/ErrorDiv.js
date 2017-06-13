import React from 'react';

import './ErrorDiv.css'

export default function ErrorComponent(props) {
  return (
    <div className="ErrorDiv" style={{ display: props.error ? 'block' : 'none' }}>
      Could not find Repo for that user
    </div>
  )
}
