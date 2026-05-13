import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function useThreeBackground() {
  const sceneRef = useRef(null)
  const particlesRef = useRef(null)
  const shapesRef = useRef([])

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const canvas = renderer.domElement
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '0'
    canvas.style.pointerEvents = 'none'
    document.body.prepend(canvas)

    // Particles
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const velocities = []

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.4; colors[i * 3 + 1] = 0.6; colors[i * 3 + 2] = 1.0
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.6; colors[i * 3 + 1] = 0.3; colors[i * 3 + 2] = 1.0
      } else {
        colors[i * 3] = 0.2; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 0.9
      }
      sizes[i] = Math.random() * 2 + 0.5
      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.005
      })
    }

    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const particleMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScrollY: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uTime;
        uniform float uScrollY;
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.y += sin(uTime * 0.5 + position.x * 0.1) * 0.5;
          pos.x += cos(uTime * 0.3 + position.y * 0.1) * 0.3;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = smoothstep(0.0, 0.5, size / 2.5);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha * 0.7;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)
    particlesRef.current = particles

    // Floating shapes
    const shapes = []
    const shapeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x4a90d9, wireframe: true, transparent: true, opacity: 0.15 }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.12 }),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.1 }),
    ]
    const geometries = [
      new THREE.IcosahedronGeometry(2, 1),
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.TorusGeometry(1.5, 0.4, 8, 16),
      new THREE.TetrahedronGeometry(1.2, 0),
      new THREE.DodecahedronGeometry(1.3, 0),
    ]

    for (let i = 0; i < 15; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)]
      const mat = shapeMaterials[Math.floor(Math.random() * shapeMaterials.length)]
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 30 - 15
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      mesh.userData = {
        rotSpeed: { x: (Math.random() - 0.5) * 0.005, y: (Math.random() - 0.5) * 0.005, z: (Math.random() - 0.5) * 0.003 },
        floatSpeed: Math.random() * 0.5 + 0.2,
        floatAmp: Math.random() * 0.5 + 0.3,
        initY: mesh.position.y
      }
      scene.add(mesh)
      shapes.push(mesh)
    }
    shapesRef.current = shapes

    // Connection lines
    const lineGeo = new THREE.BufferGeometry()
    const linePositions = new Float32Array(300 * 6)
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMat = new THREE.LineBasicMaterial({ color: 0x4a90d9, transparent: true, opacity: 0.06 })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // Mouse
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    let scrollY = 0
    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll)

    let time = 0
    let animId

    function animate() {
      animId = requestAnimationFrame(animate)
      time += 0.016
      particleMat.uniforms.uTime.value = time
      particleMat.uniforms.uScrollY.value = scrollY
      particleMat.uniforms.uMouse.value.set(mouse.x, mouse.y)

      const posArr = particleGeo.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += velocities[i].x
        posArr[i * 3 + 1] += velocities[i].y
        posArr[i * 3 + 2] += velocities[i].z
        if (Math.abs(posArr[i * 3]) > 50) velocities[i].x *= -1
        if (Math.abs(posArr[i * 3 + 1]) > 50) velocities[i].y *= -1
        if (Math.abs(posArr[i * 3 + 2] + 10) > 30) velocities[i].z *= -1
      }
      particleGeo.attributes.position.needsUpdate = true

      let lineIdx = 0
      const lp = lineGeo.attributes.position.array
      for (let i = 0; i < Math.min(particleCount, 200); i++) {
        for (let j = i + 1; j < Math.min(particleCount, 200); j++) {
          if (lineIdx >= 300) break
          const dx = posArr[i*3] - posArr[j*3]
          const dy = posArr[i*3+1] - posArr[j*3+1]
          const dz = posArr[i*3+2] - posArr[j*3+2]
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
          if (dist < 8) {
            lp[lineIdx*6] = posArr[i*3]; lp[lineIdx*6+1] = posArr[i*3+1]; lp[lineIdx*6+2] = posArr[i*3+2]
            lp[lineIdx*6+3] = posArr[j*3]; lp[lineIdx*6+4] = posArr[j*3+1]; lp[lineIdx*6+5] = posArr[j*3+2]
            lineIdx++
          }
        }
        if (lineIdx >= 300) break
      }
      for (let k = lineIdx * 6; k < 300 * 6; k++) lp[k] = 0
      lineGeo.attributes.position.needsUpdate = true
      lineGeo.setDrawRange(0, lineIdx * 2)

      shapes.forEach(s => {
        s.rotation.x += s.userData.rotSpeed.x
        s.rotation.y += s.userData.rotSpeed.y
        s.rotation.z += s.userData.rotSpeed.z
        s.position.y = s.userData.initY + Math.sin(time * s.userData.floatSpeed) * s.userData.floatAmp
      })

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    sceneRef.current = { scene, camera, renderer, particles, shapes }

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      canvas.remove()
    }
  }, [])

  return { sceneRef, particlesRef, shapesRef }
}
