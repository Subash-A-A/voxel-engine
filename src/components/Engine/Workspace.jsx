import React, { useEffect } from "react";
import Controls from "./Controls";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Workspace = ({ voxelColor }) => {
  let isShiftDown = false;
  const objects = []; // Raycast intersectable objects

  const { raycaster, pointer, camera, scene } = useThree();
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshMatcapMaterial({ color: voxelColor });
  const ghostMaterial = new THREE.MeshMatcapMaterial({
    color: voxelColor,
    transparent: true,
    depthWrite: false,
  });

  const ghostVoxel = new THREE.Mesh(geometry, ghostMaterial);
  scene.add(ghostVoxel);
  // Place a starter cube at origin
  useEffect(() => {
    const starterVoxel = new THREE.Mesh(geometry, material);
    scene.add(starterVoxel);
    objects.push(starterVoxel);
  }, []);

  const showGhostVoxel = () => {
    ghostVoxel.material.opacity = 0;
    if (!isShiftDown) {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(objects, false);
      if (intersects.length > 0) {
        const intersect = intersects[0];
        const normal = intersect.face.normal.divideScalar(2);
        ghostVoxel.material.opacity = 0.2;
        ghostVoxel.position.copy(intersect.point);
        ghostVoxel.position.add(normal);
        ghostVoxel.position.round();
      }
    }
  };
  // Create a new Mesh and making it raycast detectable (push to objects array)
  const placeVoxel = () => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objects, false);
    if (intersects.length > 0) {
      const intersect = intersects[0];
      const normal = intersect.face.normal.divideScalar(2);
      const voxel = new THREE.Mesh(geometry, material);
      voxel.position.copy(intersect.point);
      voxel.position.add(normal);
      voxel.position.round();
      objects.push(voxel);
      scene.add(voxel);
    }
  };
  // Remove the object from the scene and make it raycast un-detectable (remove from objects array)
  const destroyVoxel = () => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objects, false);
    if (intersects.length > 0) {
      const intersect = intersects[0];
      scene.remove(intersect.object);
      objects.splice(objects.indexOf(intersect.object), 1);
    }
  };

  // Pointer and Key Events
  window.addEventListener("click", () => {
    if (!isShiftDown) {
      placeVoxel();
    } else {
      destroyVoxel();
    }
  });
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Shift":
        isShiftDown = true;
        break;
    }
  });
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Shift":
        isShiftDown = false;
        break;
    }
  });
  window.addEventListener("mousemove", () => {
    showGhostVoxel();
  });

  return (
    <>
      <Controls />
    </>
  );
};

export default Workspace;
