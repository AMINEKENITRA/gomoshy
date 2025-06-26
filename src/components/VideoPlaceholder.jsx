import React from 'react'

export default function VideoPlaceholder({ serviceName }) {
  return (
    <div style={{
      width: '100%',
      height: '200px',
      backgroundColor: '#fce4ec',
      border: '2px solid #d6336c',
      borderRadius: '8px',
      marginTop: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#d6336c',
      fontWeight: 'bold',
      fontSize: '1.1rem',
    }}>
      Video Animation Placeholder for {serviceName}
    </div>
  )
}
