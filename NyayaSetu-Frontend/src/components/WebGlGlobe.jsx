import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function WebGLGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;
    let globeGroup, orbitLine;
    const R = 1;

    // ---------- SCENE ----------
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    camera.position.set(0, 0.8, 3);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // transparent background
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.minDistance = 1.5;
    controls.maxDistance = 6;

    // ---------- GLOBE (LINES ONLY) ----------
    globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
    });

    // Latitudes
    for (let lat = -75; lat <= 75; lat += 15) {
      const latRad = THREE.MathUtils.degToRad(lat);
      const y = Math.sin(latRad) * R;
      const r = Math.cos(latRad) * R;
      const points = [];

      for (let i = 0; i <= 128; i++) {
        const a = (i / 128) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      globeGroup.add(new THREE.Line(geo, globeMaterial));
    }

    // Longitudes
    for (let lon = 0; lon < 360; lon += 15) {
      const lonRad = THREE.MathUtils.degToRad(lon);
      const points = [];

      for (let i = 0; i <= 128; i++) {
        const phi = THREE.MathUtils.lerp(-Math.PI / 2, Math.PI / 2, i / 128);
        points.push(
          new THREE.Vector3(
            R * Math.cos(phi) * Math.cos(lonRad),
            R * Math.sin(phi),
            R * Math.cos(phi) * Math.sin(lonRad)
          )
        );
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      globeGroup.add(new THREE.Line(geo, globeMaterial));
    }

    // ---------- COLORFUL ORBIT ----------
    const orbitPoints = [];
    const orbitRadius = 1.4;
    const orbitSegments = 260;

    for (let i = 0; i <= orbitSegments; i++) {
      const t = (i / orbitSegments) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(
          Math.cos(t) * orbitRadius,
          Math.sin(t) * orbitRadius * 0.3,
          Math.sin(t) * orbitRadius
        )
      );
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);

    const colors = new Float32Array((orbitSegments + 1) * 3);
    for (let i = 0; i <= orbitSegments; i++) {
      const c = new THREE.Color();
      c.setHSL(i / orbitSegments, 1, 0.6);
      colors.set([c.r, c.g, c.b], i * 3);
    }

    orbitGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const orbitMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.95,
    });

    orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    scene.add(orbitLine);

    // ---------- ANIMATION ----------
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const t = performance.now() * 0.001;

      globeGroup.rotation.y = t * 0.15;
      globeGroup.rotation.x = Math.sin(t * 0.2) * 0.05;

      orbitLine.rotation.y = -t * 0.6;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // ---------- RESIZE ----------
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ---------- CLEANUP ----------
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
      }}
    />
  );
}
