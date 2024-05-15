import React from 'react'

const Floor = (props) => {
  return (
    <mesh {...props}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="white" roughness={0.5} metalness={0.5} />
        </mesh>
  )
}

export default Floor