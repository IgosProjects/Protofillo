 "use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Logos = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);

    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/node.png');

    const materialFront = new THREE.MeshBasicMaterial({ map: logoTexture });
    const materialBack = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Set the color for the back face

    // Create an array of materials, with the front face material at index 0 and the back face material at index 1
    const materials = [materialFront, materialBack];

    const ball = new THREE.Mesh(geometry, materials); // Use the materials array for the sphere
    scene.add(ball);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Logos;
