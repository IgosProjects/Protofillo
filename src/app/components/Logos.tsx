import { useClient } from 'next';
import * as THREE from 'three';
import { useRef } from 'react';

const Logos = () => {
  const client = useClient();
  
  if (!client) {
    return null; // Return null if not on the client side
  }

  const sceneRef = useRef(null);

  // Code for Three.js scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1, 32, 32);

  const textureLoader = new THREE.TextureLoader();
  const logoTexture = textureLoader.load('/node.png');

  const material = new THREE.MeshBasicMaterial({ map: logoTexture });

  const ball = new THREE.Mesh(geometry, material);
  scene.add(ball);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  return <div ref={sceneRef} />;
};

export default Logos;
