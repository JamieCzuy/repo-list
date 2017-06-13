import React from 'react';

export default function ErrorComponent(props) {
  return (
    <div className="RepoList-error" style={{ display: props.error ? 'block' : 'none' }}>
      Could not find Repo for that user
    </div>
  )
}