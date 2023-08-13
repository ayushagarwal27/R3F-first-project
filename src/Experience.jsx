import {
  TransformControls,
  OrbitControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* Sphere */}
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphereRef, cubeRef]}
          >
            This is a Sphere 🌏
          </Html>
        </mesh>
      </PivotControls>

      {/* Cube */}
      <mesh position-x={2} scale={1.5} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />

      {/* Plane */}
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          color="lightpink"
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.35}
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          color={"purple"}
          font="./underdog-v23-latin-regular.woff2"
          fontSize={1}
          position-y={1}
          maxWidth={2}
          textAlign="center"
        >
          I Love R3F
        </Text>
      </Float>
    </>
  );
}
