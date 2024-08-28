import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';

const WaveParticles = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const statsRef = useRef(null);
  const countRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const speedRef = useRef(0.02);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

  useEffect(() => {
    const init = () => {
      cameraRef.current = new THREE.PerspectiveCamera(75, windowSize.width / windowSize.height, 1, 10000);
      
      // Set camera position to top view
      cameraRef.current.position.set(-100, 1000, 100);  // Positioned high above the scene
      cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));  // Looking at the center of the scene

      sceneRef.current = new THREE.Scene();

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0, j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          positions[i + 1] = 0;
          positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
          scales[j] = 1;
          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
        },
        vertexShader: `
          attribute float scale;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          void main() {
            if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
            gl_FragColor = vec4(color, 1.0);
          }
        `
      });

      particlesRef.current = new THREE.Points(geometry, material);
      sceneRef.current.add(particlesRef.current);

      rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      rendererRef.current.setSize(windowSize.width, windowSize.height);
      containerRef.current.appendChild(rendererRef.current.domElement);

      statsRef.current = new Stats();
      containerRef.current.appendChild(statsRef.current.dom);

      containerRef.current.style.touchAction = 'none';
      containerRef.current.addEventListener('pointermove', onPointerMove);

      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = (event) => {
      if (event.isPrimary === false) return;

      mouseXRef.current = event.clientX - windowSize.width / 2;
      mouseYRef.current = event.clientY - windowSize.height / 2;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
      statsRef.current.update();
    };

    const render = () => {
      cameraRef.current.lookAt(sceneRef.current.position);

      const positions = particlesRef.current.geometry.attributes.position.array;
      const scales = particlesRef.current.geometry.attributes.scale.array;

      let i = 0, j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] = (Math.sin((ix + countRef.current) * 0.3) * 25) +
                             (Math.sin((iy + countRef.current) * 0.5) * 25);

          scales[j] = (Math.sin((ix + countRef.current) * 0.3) + 1) * 2 +
                      (Math.sin((iy + countRef.current) * 0.5) + 1) * 2;

          i += 3;
          j++;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.geometry.attributes.scale.needsUpdate = true;

      rendererRef.current.render(sceneRef.current, cameraRef.current);

      countRef.current += speedRef.current;
    };

    init();
    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        containerRef.current.removeChild(statsRef.current.dom);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, [windowSize]);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default WaveParticles;