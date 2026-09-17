import { useEffect, useRef, useState } from 'react'

/**
 * Smooth marquee with:
 * - Continuous RAF-driven scroll (no CSS animation conflicts)
 * - On hover: smoothly eases down to `hoverSpeedFactor` (default 0.15 = 15%)
 * - On mouse-out: smoothly eases back to full speed
 * - Works with reverse direction
 */
export default function Marquee({
  children,
  speed = 70,               // seconds for one full loop at 100% speed
  reverse = false,
  hoverSpeedFactor = 0.15,  // 0 = full stop on hover, 1 = no slowdown
  ease = 2.5,               // easing sharpness when transitioning speed
}) {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const lastTsRef = useRef(null)
  const rafRef = useRef(null)

  // current smoothed factor (0..1) and target factor
  const factorRef = useRef(1)
  const targetFactorRef = useRef(1)

  const [hovered, setHovered] = useState(false)

  // Update target whenever hover state changes
  useEffect(() => {
    targetFactorRef.current = hovered ? hoverSpeedFactor : 1
  }, [hovered, hoverSpeedFactor])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const halfWidth = () => track.scrollWidth / 2

    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05) // clamp to avoid jumps
      lastTsRef.current = ts

      // Smoothly ease current factor toward the target factor
      const current = factorRef.current
      const target = targetFactorRef.current
      const next = current + (target - current) * Math.min(1, dt * ease)
      factorRef.current = next

      // Compute pixels-per-second based on eased factor
      const hw = halfWidth() || 1
      const basePxPerSec = hw / speed
      const pxPerSec = basePxPerSec * next
      const dir = reverse ? 1 : -1

      offsetRef.current += dir * pxPerSec * dt

      // Wrap around for seamless loop
      if (!reverse && offsetRef.current <= -hw) offsetRef.current += hw
      if (reverse && offsetRef.current >= 0) offsetRef.current -= hw

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      lastTsRef.current = null
    }
  }, [speed, reverse, ease])

  return (
    <div
      className="marquee-mask relative overflow-hidden py-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-5 w-max will-change-transform transform-gpu"
      >
        <div className="flex gap-5 shrink-0">{children}</div>
        <div className="flex gap-5 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}