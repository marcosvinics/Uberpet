import { useEffect } from 'react'
import '../styles/gradientCanvas.css'

export function GradientCanvas() {
  useEffect(() => {
    // @ts-ignore
    import('../utils/Gradient.js').then((module) => {
      const Gradient = module.default
      const gradient = new Gradient()
      gradient.initGradient('#gradient-canvas')
    })
  }, [])

  return (
    <canvas
      id="gradient-canvas"
      data-transition-in
      className="absolute top-0 left-0 w-full h-screen"
    />
  )
}
