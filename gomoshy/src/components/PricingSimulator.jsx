import React from 'react'

export default function PricingSimulator({ serviceName }) {
  return (
    <section style={{
      border: '2px dashed #d6336c',
      padding: '20px',
      marginTop: '30px',
      borderRadius: '8px',
      backgroundColor: '#fff0f6',
    }}>
      <h3 style={{ color: '#d6336c' }}>Pricing Simulator for {serviceName}</h3>
      <p style={{ color: '#6a2c70' }}>[Pricing simulator UI goes here]</p>
    </section>
  )
}
