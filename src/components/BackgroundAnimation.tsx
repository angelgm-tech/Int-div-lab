import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const cubes: THREE.Mesh[] = [];
    const cubeCount = 50;

    for (let i = 0; i < cubeCount; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshPhongMaterial({
        color: 0x00fff2,
        transparent: true,
        opacity: 0.6
      });
      
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      );
      
      cube.userData = {
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01
      };
      
      scene.add(cube);
      cubes.push(cube);
    }

    const light = new THREE.PointLight(0xff00ff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 15;

    function animate() {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      cubes.forEach((cube, i) => {
        const scale = 1 + Math.sin(time + cube.userData.phase) * 0.3;
        cube.scale.set(scale, scale, scale);

        const angle = time * cube.userData.speed + i * 0.1;
        const radius = 10 + Math.sin(time * 0.5) * 5;
        cube.position.x = Math.cos(angle) * radius;
        cube.position.y = Math.sin(angle) * radius;
        cube.position.z = Math.sin(time + i * 0.1) * 5;

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      camera.position.z = 15 + Math.sin(time * 0.5) * 3;

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none"
    />
  );
}