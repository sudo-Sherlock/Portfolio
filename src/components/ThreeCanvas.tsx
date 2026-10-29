"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL initialization skipped:", e);
      return;
    }

    // Group for all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Icosahedron Wireframe (Cryptographic Core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.8, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLine = new THREE.LineSegments(
      coreWireframe,
      new THREE.LineBasicMaterial({
        color: 0x2f5d50, // Forest green
        transparent: true,
        opacity: 0.65,
        linewidth: 1.5,
      })
    );
    mainGroup.add(coreLine);

    // 2. Inner Polyhedron (Evidence Nucleus)
    const innerGeometry = new THREE.OctahedronGeometry(1.0, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xb75c3b, // Muted terracotta
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Node Points (Evidence Intersections)
    const pointCount = 42;
    const pointsGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pointCount * 3);
    const radius = 2.4;

    for (let i = 0; i < pointCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius * Math.cbrt(Math.random() * 0.8 + 0.2);
      const sinPhi = Math.sin(phi);

      positions[i] = r * sinPhi * Math.cos(theta);
      positions[i + 1] = r * sinPhi * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0x2f5d50,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    mainGroup.add(pointsMesh);

    // 4. Interactive Orbital Ring (Packet Transmission Path)
    const ringGeo = new THREE.RingGeometry(2.7, 2.73, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3e7465,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh);

    // Mouse & Scroll Interaction state
    let targetRotationX = 0;
    let targetRotationY = 0;
    let scrollYOffset = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / height) * 2 - 1);
      targetRotationY = mouseX * 0.7;
      targetRotationX = -mouseY * 0.7;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollYOffset = scrollY * 0.002;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("mousemove", handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle ambient 3D rotation
      coreLine.rotation.y += delta * 0.18 + scrollYOffset * 0.05;
      coreLine.rotation.x += delta * 0.12;

      innerMesh.rotation.y -= delta * 0.25;
      innerMesh.rotation.z += delta * 0.15;

      ringMesh.rotation.z += delta * 0.3;

      // Mouse-driven 3D tilt with smooth damping (lerp)
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Floating breathing pulse
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      innerGeometry.dispose();
      pointsGeo.dispose();
      ringGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] sm:min-h-[420px] relative cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D cryptographic evidence lattice"
      role="img"
    >
      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-ink-muted/70 bg-paper/80 px-2 py-0.5 rounded border border-rule-border/60 pointer-events-none">
        3D Interactive • Drag to Tilt
      </div>
    </div>
  );
}

