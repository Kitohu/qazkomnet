<template>
  <div ref="containerRef" class="particles-container">
    <canvas ref="canvasRef" class="particles-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const MAX_PARTICLES = 180

const containerRef = ref(null)
const canvasRef = ref(null)

let animationId = null
let particles = []
let mouse = { x: 0, y: 0 }
let globalHue = 220
let lastSpawnTime = Number.NEGATIVE_INFINITY
let lastMouseSpawn = 0
let lastFrameTime = 0

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.opacity = Math.random() * 0.5 + 0.5
    this.life = 1
    this.decay = Math.random() * 0.01 + 0.005
    this.hueOffset = Math.random() * 40 - 20
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life -= this.decay
    
    // Притяжение к мыши
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 100) {
      const force = (100 - distance) / 100
      this.x += dx * force * 0.01
      this.y += dy * force * 0.01
    }
    
    this.opacity = this.life * 0.5
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `hsl(${globalHue + this.hueOffset}, 70%, 60%)`
    ctx.fill()
    ctx.restore()
  }
}

const createParticle = (x, y) => {
  if (particles.length >= MAX_PARTICLES) {
    particles.splice(0, particles.length - MAX_PARTICLES + 1)
  }

  particles.push(new Particle(x, y))
}

const animate = (timestamp) => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if (!lastFrameTime) {
    lastFrameTime = timestamp
  }

  const delta = timestamp - lastFrameTime
  lastFrameTime = timestamp
  globalHue = (globalHue + delta * 0.05) % 360
  
  // Обновляем и рисуем частицы
  particles = particles.filter(particle => {
    particle.update()
    particle.draw(ctx)
    return particle.life > 0
  })
  
  // Создаем новые частицы случайно
  if (timestamp - lastSpawnTime > 150) {
    createParticle(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    )
    lastSpawnTime = timestamp
  }
  
  animationId = requestAnimationFrame(animate)
}

const handleMouseMove = (event) => {
  const rect = canvasRef.value.getBoundingClientRect()
  mouse.x = event.clientX - rect.left
  mouse.y = event.clientY - rect.top
  
  // Создаем частицы при движении мыши
  const now = performance.now()
  if (now - lastMouseSpawn > 60) {
    createParticle(mouse.x, mouse.y)
    lastMouseSpawn = now
  }
}

const handleResize = () => {
  const canvas = canvasRef.value
  const container = containerRef.value
  
  canvas.width = container.offsetWidth
  canvas.height = container.offsetHeight
}

onMounted(() => {
  const canvas = canvasRef.value
  const container = containerRef.value
  
  // Инициализация размеров
  canvas.width = container.offsetWidth
  canvas.height = container.offsetHeight
  
  // Создаем начальные частицы
  for (let i = 0; i < 20; i++) {
    createParticle(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    )
  }
  
  // Запускаем анимацию
  animationId = requestAnimationFrame(animate)
  
  // Обработчики событий
  canvas.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  if (canvasRef.value) {
    canvasRef.value.removeEventListener('mousemove', handleMouseMove)
  }
  
  window.removeEventListener('resize', handleResize)
  particles = []
})
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particles-canvas {
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
</style>