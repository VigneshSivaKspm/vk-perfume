import React, { useEffect, useRef } from 'react';

export type BackgroundAnimationVariant =
  | 'home'
  | 'about'
  | 'collections'
  | 'fragrance-oud'
  | 'fragrance-jasmine'
  | 'fragrance-aquatic'
  | 'fragrance-citrus'
  | 'fragrance-vanilla'
  | 'manufacturing'
  | 'private-label'
  | 'craftsmanship'
  | 'packaging'
  | 'process'
  | 'launch'
  | 'lookbook'
  | 'contact'
  | 'minimal';

interface PageBackgroundProps {
  variant?: BackgroundAnimationVariant;
  className?: string;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({
  variant = 'home',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // ==========================================
    // PARTICLE & WAVE DATA STRUCTURES PER VARIANT
    // ==========================================

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      baseAlpha: number;
      rotation: number;
      rotationSpeed: number;
      shape?: 'circle' | 'petal' | 'dust' | 'bubble' | 'diamond' | 'ring';
      phase: number;
    }

    const particles: Particle[] = [];
    const particleCount = prefersReducedMotion ? 0 : getParticleCount(variant);

    function getParticleCount(v: BackgroundAnimationVariant): number {
      switch (v) {
        case 'home': return 32;
        case 'about': return 26;
        case 'collections': return 28;
        case 'fragrance-oud': return 35;
        case 'fragrance-jasmine': return 28;
        case 'fragrance-aquatic': return 36;
        case 'fragrance-citrus': return 40;
        case 'fragrance-vanilla': return 26;
        case 'manufacturing': return 24;
        case 'private-label': return 22;
        case 'craftsmanship': return 30;
        case 'packaging': return 20;
        case 'process': return 35;
        case 'launch': return 45;
        case 'lookbook': return 18;
        case 'contact': return 14;
        default: return 12;
      }
    }

    // Initialize particles according to variant
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(variant, width, height));
    }

    function createParticle(v: BackgroundAnimationVariant, w: number, h: number): Particle {
      const x = Math.random() * w;
      const y = Math.random() * h;
      let vx = (Math.random() - 0.5) * 0.4;
      let vy = -0.2 - Math.random() * 0.4; // slight upward drift default
      let size = 1.5 + Math.random() * 3;
      let color = 'rgba(181, 154, 104, '; // gold default
      let baseAlpha = 0.2 + Math.random() * 0.35;
      let shape: Particle['shape'] = 'circle';
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.02;
      const phase = Math.random() * Math.PI * 2;

      switch (v) {
        case 'home':
          // Golden luminous dust motes
          color = Math.random() > 0.6 ? 'rgba(181, 154, 104, ' : 'rgba(233, 217, 191, ';
          size = 1.2 + Math.random() * 2.8;
          baseAlpha = 0.15 + Math.random() * 0.35;
          vy = -0.15 - Math.random() * 0.25;
          shape = 'dust';
          break;

        case 'about':
          // Soft drifting jasmine petals & botanical spores
          shape = Math.random() > 0.4 ? 'petal' : 'circle';
          color = shape === 'petal' ? 'rgba(255, 255, 255, ' : 'rgba(142, 156, 133, '; // petal white / botanical green
          size = shape === 'petal' ? 5 + Math.random() * 6 : 2 + Math.random() * 2;
          vy = 0.2 + Math.random() * 0.4; // drifting gently downward
          vx = (Math.random() - 0.5) * 0.6;
          baseAlpha = 0.25 + Math.random() * 0.35;
          break;

        case 'collections':
          // Morphing fragrance chromatic dust
          const colColors = [
            'rgba(181, 154, 104, ', // gold
            'rgba(0, 150, 136, ',   // brand teal
            'rgba(72, 169, 197, ',  // oceanic blue
            'rgba(212, 163, 115, ', // jasmine blush
            'rgba(198, 139, 89, '   // vanilla caramel
          ];
          color = colColors[Math.floor(Math.random() * colColors.length)];
          size = 2 + Math.random() * 3.5;
          baseAlpha = 0.18 + Math.random() * 0.3;
          shape = 'dust';
          break;

        case 'fragrance-oud':
          // Rising incense smoke embers & warm amber sparks
          color = Math.random() > 0.5 ? 'rgba(212, 160, 80, ' : 'rgba(140, 78, 22, ';
          size = 1.5 + Math.random() * 3.2;
          vy = -0.4 - Math.random() * 0.5; // rising like smoke
          vx = (Math.random() - 0.5) * 0.4;
          baseAlpha = 0.25 + Math.random() * 0.45;
          shape = 'dust';
          break;

        case 'fragrance-jasmine':
          // Floating white petals drifting with gentle sway
          shape = 'petal';
          color = Math.random() > 0.5 ? 'rgba(255, 255, 255, ' : 'rgba(247, 235, 225, ';
          size = 5 + Math.random() * 7;
          vy = 0.25 + Math.random() * 0.35;
          vx = (Math.random() - 0.5) * 0.5;
          baseAlpha = 0.3 + Math.random() * 0.4;
          break;

        case 'fragrance-aquatic':
          // Rising sea-mist bubbles and ocean droplets
          shape = 'bubble';
          color = Math.random() > 0.4 ? 'rgba(72, 169, 197, ' : 'rgba(176, 222, 235, ';
          size = 2 + Math.random() * 5;
          vy = -0.35 - Math.random() * 0.45;
          vx = (Math.random() - 0.5) * 0.3;
          baseAlpha = 0.2 + Math.random() * 0.35;
          break;

        case 'fragrance-citrus':
          // Sparkling effervescent citrus bubbles & sunbeam flares
          shape = 'bubble';
          color = Math.random() > 0.5 ? 'rgba(245, 223, 118, ' : 'rgba(212, 175, 55, ';
          size = 1.8 + Math.random() * 4;
          vy = -0.45 - Math.random() * 0.55;
          vx = (Math.random() - 0.5) * 0.35;
          baseAlpha = 0.25 + Math.random() * 0.45;
          break;

        case 'fragrance-vanilla':
          // Molten caramel glowing halo particles
          shape = 'circle';
          color = Math.random() > 0.5 ? 'rgba(198, 139, 89, ' : 'rgba(233, 185, 140, ';
          size = 3 + Math.random() * 5;
          vy = -0.15 - Math.random() * 0.25;
          vx = (Math.random() - 0.5) * 0.3;
          baseAlpha = 0.2 + Math.random() * 0.35;
          break;

        case 'manufacturing':
          // Precision crosshair / technical dust
          shape = 'diamond';
          color = 'rgba(0, 150, 136, '; // cleanroom teal
          size = 2 + Math.random() * 2.5;
          vy = -0.15 - Math.random() * 0.2;
          baseAlpha = 0.15 + Math.random() * 0.3;
          break;

        case 'private-label':
          // Shimmering gold diamond facets
          shape = 'diamond';
          color = 'rgba(181, 154, 104, ';
          size = 2.5 + Math.random() * 3.5;
          vy = -0.2 - Math.random() * 0.3;
          baseAlpha = 0.2 + Math.random() * 0.35;
          break;

        case 'craftsmanship':
          // Spores & dew drops
          shape = Math.random() > 0.5 ? 'petal' : 'circle';
          color = 'rgba(142, 156, 133, ';
          size = 3 + Math.random() * 4;
          vy = 0.2 + Math.random() * 0.3;
          baseAlpha = 0.2 + Math.random() * 0.35;
          break;

        case 'packaging':
          // Facet geometric crystal particles
          shape = 'diamond';
          color = 'rgba(212, 190, 141, ';
          size = 3 + Math.random() * 4;
          vy = -0.2 - Math.random() * 0.25;
          baseAlpha = 0.2 + Math.random() * 0.35;
          break;

        case 'process':
          // Downward flowing river particles
          shape = 'circle';
          color = 'rgba(181, 154, 104, ';
          size = 2 + Math.random() * 3;
          vy = 0.5 + Math.random() * 0.6; // flowing down
          vx = (Math.random() - 0.5) * 0.2;
          baseAlpha = 0.2 + Math.random() * 0.35;
          break;

        case 'launch':
          // Radiant starburst dust & celebration sparkles
          shape = Math.random() > 0.6 ? 'diamond' : 'circle';
          color = Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(0, 201, 167, ';
          size = 1.5 + Math.random() * 3.5;
          vy = -0.3 - Math.random() * 0.4;
          baseAlpha = 0.25 + Math.random() * 0.5;
          break;

        case 'lookbook':
          // Golden archival film grain motes
          shape = 'dust';
          color = 'rgba(181, 154, 104, ';
          size = 1.5 + Math.random() * 2.5;
          vy = -0.15 - Math.random() * 0.25;
          baseAlpha = 0.15 + Math.random() * 0.3;
          break;

        case 'contact':
          // Concentric circular ripples
          shape = 'ring';
          color = 'rgba(181, 154, 104, ';
          size = 4 + Math.random() * 12;
          vy = -0.1 - Math.random() * 0.15;
          baseAlpha = 0.15 + Math.random() * 0.25;
          break;

        default:
          break;
      }

      return {
        x,
        y,
        vx,
        vy,
        size,
        color,
        alpha: baseAlpha,
        baseAlpha,
        rotation,
        rotationSpeed,
        shape,
        phase,
      };
    }

    // ==========================================
    // RENDER LOOP WITH PROCEDURAL DYNAMICS
    // ==========================================
    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Variant-Specific Ambient Glow Fields / Meshes
      drawVariantBackgroundMeshes(ctx, variant, width, height, time);

      // 2. Draw & Update Dynamic Particles (if not reduced motion)
      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Gentle sine sway on X axis
          p.x += p.vx + Math.sin(time + p.phase) * 0.3;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;

          // Alpha breathing
          p.alpha = p.baseAlpha * (0.7 + Math.sin(time * 2 + p.phase) * 0.3);

          // Wrap edges smoothly
          if (p.y < -30) p.y = height + 20;
          if (p.y > height + 30) p.y = -20;
          if (p.x < -30) p.x = width + 20;
          if (p.x > width + 30) p.x = -20;

          // Draw Particle Shape
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = `${p.color}${p.alpha})`;

          if (p.shape === 'petal') {
            // Elegant curved organic flower petal
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.quadraticCurveTo(p.size * 0.7, -p.size * 0.3, p.size * 0.5, p.size * 0.8);
            ctx.quadraticCurveTo(0, p.size, -p.size * 0.5, p.size * 0.8);
            ctx.quadraticCurveTo(-p.size * 0.7, -p.size * 0.3, 0, -p.size);
            ctx.fill();
          } else if (p.shape === 'bubble') {
            // Refractive aquatic/citrus bubble with highlight
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.strokeStyle = `${p.color}${p.alpha * 1.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.fill();
            // Tiny bubble reflection shine
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 1.5})`;
            ctx.beginPath();
            ctx.arc(-p.size * 0.35, -p.size * 0.35, p.size * 0.25, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === 'diamond') {
            // Faceted perfume crystal diamond
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.3);
            ctx.lineTo(p.size * 0.9, 0);
            ctx.lineTo(0, p.size * 1.3);
            ctx.lineTo(-p.size * 0.9, 0);
            ctx.closePath();
            ctx.fill();
          } else if (p.shape === 'ring') {
            // Concentric scent ripple ring
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.strokeStyle = `${p.color}${p.alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          } else {
            // Glowing round dust mote
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [variant]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {/* Dynamic Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle Luxury Film Grain Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
    </div>
  );
};

// ==========================================
// BESPOKE AMBIENT MESHES PER PAGE VARIANT
// ==========================================
function drawVariantBackgroundMeshes(
  ctx: CanvasRenderingContext2D,
  variant: BackgroundAnimationVariant,
  width: number,
  height: number,
  time: number
) {
  switch (variant) {
    case 'home': {
      // 1. Warm golden ambient halo drifting across top-center
      const cx = width * 0.5 + Math.sin(time * 0.5) * (width * 0.15);
      const cy = height * 0.28 + Math.cos(time * 0.4) * (height * 0.08);
      const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.45);
      radGrad.addColorStop(0, 'rgba(233, 217, 191, 0.22)');
      radGrad.addColorStop(0.5, 'rgba(181, 154, 104, 0.08)');
      radGrad.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary soft jewel-teal accent halo (brand monogram heritage)
      const tX = width * 0.8 + Math.cos(time * 0.3) * (width * 0.1);
      const tY = height * 0.65 + Math.sin(time * 0.35) * (height * 0.1);
      const tealGrad = ctx.createRadialGradient(tX, tY, 0, tX, tY, width * 0.35);
      tealGrad.addColorStop(0, 'rgba(0, 150, 136, 0.045)');
      tealGrad.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = tealGrad;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'about': {
      // Botanical sunlight rays filtering through morning garden
      const sx = width * 0.25 + Math.sin(time * 0.3) * 60;
      const sy = height * 0.2;
      const sunGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, width * 0.5);
      sunGrad.addColorStop(0, 'rgba(233, 217, 191, 0.28)');
      sunGrad.addColorStop(0.5, 'rgba(142, 156, 133, 0.08)'); // botanical green warmth
      sunGrad.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'collections': {
      // Morphing multi-chromatic perfume aura
      const x1 = width * 0.3 + Math.sin(time * 0.4) * (width * 0.12);
      const y1 = height * 0.35 + Math.cos(time * 0.3) * (height * 0.1);
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, width * 0.4);
      g1.addColorStop(0, 'rgba(181, 154, 104, 0.18)');
      g1.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const x2 = width * 0.7 + Math.cos(time * 0.4) * (width * 0.12);
      const y2 = height * 0.6 + Math.sin(time * 0.5) * (height * 0.1);
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, width * 0.4);
      g2.addColorStop(0, 'rgba(72, 169, 197, 0.12)'); // sea cyan
      g2.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'fragrance-oud': {
      // Deep desert dusk & smoked amber hearth aura
      const ox = width * 0.5 + Math.sin(time * 0.25) * 40;
      const oy = height * 0.35 + Math.cos(time * 0.3) * 30;
      const og = ctx.createRadialGradient(ox, oy, 0, ox, oy, width * 0.45);
      og.addColorStop(0, 'rgba(140, 78, 22, 0.16)');
      og.addColorStop(0.5, 'rgba(181, 154, 104, 0.08)');
      og.addColorStop(1, 'rgba(250, 244, 235, 0)');
      ctx.fillStyle = og;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'fragrance-jasmine': {
      // Dewy morning dawn twilight & pearl-white radiance
      const jx = width * 0.5;
      const jy = height * 0.32 + Math.sin(time * 0.3) * 25;
      const jg = ctx.createRadialGradient(jx, jy, 0, jx, jy, width * 0.45);
      jg.addColorStop(0, 'rgba(255, 240, 230, 0.35)');
      jg.addColorStop(0.6, 'rgba(212, 163, 115, 0.08)');
      jg.addColorStop(1, 'rgba(251, 248, 245, 0)');
      ctx.fillStyle = jg;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'fragrance-aquatic': {
      // Coromandel oceanic tide caustic waves
      const ax = width * 0.5 + Math.sin(time * 0.4) * 50;
      const ay = height * 0.35;
      const ag = ctx.createRadialGradient(ax, ay, 0, ax, ay, width * 0.48);
      ag.addColorStop(0, 'rgba(72, 169, 197, 0.22)');
      ag.addColorStop(0.5, 'rgba(30, 96, 125, 0.08)');
      ag.addColorStop(1, 'rgba(242, 248, 250, 0)');
      ctx.fillStyle = ag;
      ctx.fillRect(0, 0, width, height);

      // Gentle aquatic wave band across top
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.2);
      for (let x = 0; x <= width; x += 40) {
        const y = height * 0.2 + Math.sin(x * 0.005 + time * 1.2) * 18;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fillStyle = 'rgba(72, 169, 197, 0.035)';
      ctx.fill();
      ctx.restore();
      break;
    }

    case 'fragrance-citrus': {
      // Sunlit mountain prism radiance
      const cx = width * 0.5 + Math.sin(time * 0.5) * 40;
      const cy = height * 0.3;
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.45);
      cg.addColorStop(0, 'rgba(245, 223, 118, 0.25)');
      cg.addColorStop(0.5, 'rgba(212, 175, 55, 0.09)');
      cg.addColorStop(1, 'rgba(252, 250, 242, 0)');
      ctx.fillStyle = cg;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'fragrance-vanilla': {
      // Molten warm honey caramel confectionery glow
      const vx = width * 0.5;
      const vy = height * 0.35 + Math.cos(time * 0.3) * 25;
      const vg = ctx.createRadialGradient(vx, vy, 0, vx, vy, width * 0.45);
      vg.addColorStop(0, 'rgba(198, 139, 89, 0.22)');
      vg.addColorStop(0.5, 'rgba(133, 77, 39, 0.08)');
      vg.addColorStop(1, 'rgba(250, 245, 240, 0)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'manufacturing': {
      // Precision cleanroom subtle grid & emerald-teal formulation glow
      const mx = width * 0.7;
      const my = height * 0.3;
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, width * 0.4);
      mg.addColorStop(0, 'rgba(0, 150, 136, 0.12)');
      mg.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, width, height);

      // Subtle technical laboratory coordinate grid
      ctx.save();
      ctx.strokeStyle = 'rgba(181, 154, 104, 0.04)';
      ctx.lineWidth = 0.5;
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
      break;
    }

    case 'private-label': {
      // Prestige architectural gold foil diagonal shimmer
      const px = width * 0.4 + Math.sin(time * 0.3) * 50;
      const py = height * 0.35;
      const pg = ctx.createRadialGradient(px, py, 0, px, py, width * 0.45);
      pg.addColorStop(0, 'rgba(212, 190, 141, 0.22)');
      pg.addColorStop(0.5, 'rgba(181, 154, 104, 0.06)');
      pg.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = pg;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'launch': {
      // Tamil Nadu Launch constellation beacon glow
      const lx = width * 0.5;
      const ly = height * 0.3 + Math.sin(time * 0.4) * 30;
      const lg = ctx.createRadialGradient(lx, ly, 0, lx, ly, width * 0.5);
      lg.addColorStop(0, 'rgba(212, 175, 55, 0.24)');
      lg.addColorStop(0.5, 'rgba(0, 150, 136, 0.08)');
      lg.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, width, height);
      break;
    }

    case 'contact': {
      // Expanding concentric sillage aura
      const rippleRadius = (time * 30) % (width * 0.4);
      ctx.save();
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.35, rippleRadius, 0, Math.PI * 2);
      const alpha = Math.max(0, 1 - rippleRadius / (width * 0.4)) * 0.08;
      ctx.strokeStyle = `rgba(181, 154, 104, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
      break;
    }

    default: {
      // Minimal soft warm ivory breathing glow
      const defX = width * 0.5;
      const defY = height * 0.3;
      const defGrad = ctx.createRadialGradient(defX, defY, 0, defX, defY, width * 0.45);
      defGrad.addColorStop(0, 'rgba(233, 217, 191, 0.16)');
      defGrad.addColorStop(1, 'rgba(250, 248, 244, 0)');
      ctx.fillStyle = defGrad;
      ctx.fillRect(0, 0, width, height);
      break;
    }
  }
}
