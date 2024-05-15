import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import PCscene from '../assets/3d/pc_model.glb'
import { useFrame, useThree } from "@react-three/fiber";
export function PC(props) {
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(PCscene);
   
  return (
    <group {...props} dispose={null}>
      <group position={[-0.4,-0.8,-0.4]} scale={0.01}>
        <skinnedMesh
          geometry={nodes.Object_5.geometry}
          material={materials.Plastic}
          skeleton={nodes.Object_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_6.geometry}
          material={materials.Support}
          skeleton={nodes.Object_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.Cloth_Material}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.Metal}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_9.geometry}
          material={materials.Black_Plastic}
          skeleton={nodes.Object_9.skeleton}
        />
        <primitive object={nodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.power_cordShape_Cord_0.geometry}
          material={materials.Cord}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.power_cordShape_Power_Outlet_0.geometry}
          material={materials.Power_Outlet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_oldShape_Back_0.geometry}
          material={materials.Back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_oldShape_CPU_0.geometry}
          material={materials.material_34}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_oldShape_Under_0.geometry}
          material={materials.Under}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_old_cablesShape_Cable_Socket_Material_0.geometry}
          material={materials.Cable_Socket_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_old_cablesShape_Cord_0.geometry}
          material={materials.Cord_9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CRTmonitorShape_CRT_0.geometry}
          material={materials.material_37}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CRTmonitorShape_CRTscreen_Material_0.geometry}
          material={materials.CRTscreen_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_oldShape_Base_0.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_oldShape_Cord_0.geometry}
          material={materials.Cord_8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_oldShape_Keys_0.geometry}
          material={materials.Keys}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_oldShape_Plug_0.geometry}
          material={materials.Plug_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mouse_oldShape_Cord_0.geometry}
          material={materials.Cord_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mouse_oldShape_Mouse_0.geometry}
          material={materials.Mouse}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mouse_oldShape_Plug_0.geometry}
          material={materials.Plug_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.printerShape_printer_Material_0.geometry}
          material={materials.printer_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.printer_cablesShape_Cord_0.geometry}
          material={materials.Cord_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.printer_cablesShape_CPU_Cable_0.geometry}
          material={materials.CPU_Cable}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.printer_cablesShape_Plug_0.geometry}
          material={materials.Plug}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAN_cable_CPUShape_Cord_0.geometry}
          material={materials.Cord_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAN_cable_leftShape_Cord_0.geometry}
          material={materials.Cord_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAN_cable_old_CPUShape_Cord_0.geometry}
          material={materials.Cord_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAN_cable_rightShape_Cord_0.geometry}
          material={materials.Cord_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.routerShape_Antenna_0.geometry}
          material={materials.Antenna}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.routerShape_Router_0.geometry}
          material={materials.Router}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.router_cableShape_Cord_0.geometry}
          material={materials.Cord_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shelfShape_Frame_0.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shelfShape_Rubber_0.geometry}
          material={materials.Rubber}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shelfShape_Shelf_0.geometry}
          material={materials.Shelf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tranceiver_cableShape_Cord_0.geometry}
          material={materials.Cord_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.transceiverShape_Box_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.transceiverShape_Coil_0.geometry}
          material={materials.Coil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.transceiverShape_Handle_0.geometry}
          material={materials.Handle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.transceiverShape_Interface_0.geometry}
          material={materials.Interface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.transceiverShape_Switch_0.geometry}
          material={materials.Switch}
        />
        <skinnedMesh
          geometry={nodes.Object_100.geometry}
          material={materials.Arms_1}
          skeleton={nodes.Object_100.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_101.geometry}
          material={materials.Screw_1}
          skeleton={nodes.Object_101.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_102.geometry}
          material={materials.Frame_2}
          skeleton={nodes.Object_102.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_103.geometry}
          material={materials.Screen_1}
          skeleton={nodes.Object_103.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_92.geometry}
          material={materials.Arms}
          skeleton={nodes.Object_92.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_93.geometry}
          material={materials.Screw}
          skeleton={nodes.Object_93.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_94.geometry}
          material={materials.Frame_0}
          skeleton={nodes.Object_94.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_95.geometry}
          material={materials.Screen}
          skeleton={nodes.Object_95.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_96.geometry}
          material={materials.Arms_0}
          skeleton={nodes.Object_96.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_97.geometry}
          material={materials.Screw_0}
          skeleton={nodes.Object_97.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_98.geometry}
          material={materials.Frame_1}
          skeleton={nodes.Object_98.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_99.geometry}
          material={materials.Screen_0}
          skeleton={nodes.Object_99.skeleton}
        />
        <primitive object={nodes._rootJoint_1} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPUShape_CPU_0.geometry}
          material={materials.CPU_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_cablesShape_Cable_Socket_Material_0.geometry}
          material={materials.Cable_Socket_Material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_cablesShape_Cord_0.geometry}
          material={materials.Cord_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_left_cablesShape_Cable_Socket_Material_0.geometry}
          material={materials.Cable_Socket_Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_left_cablesShape_Cord_0.geometry}
          material={materials.Cord_19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_left_cablesShape_Thin_Cord_0.geometry}
          material={materials.Thin_Cord}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_with_standShape_CPU_0.geometry}
          material={materials.CPU_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_with_standShape_Rubber_0.geometry}
          material={materials.Rubber_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_with_standShape_Stand_0.geometry}
          material={materials.Stand_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_right_cablesShape_Cable_Socket_Material_0.geometry}
          material={materials.Cable_Socket_Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_right_cablesShape_Cord_0.geometry}
          material={materials.Cord_18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['CPU_with_stand(right)Shape_CPU_0'].geometry}
          material={materials.CPU_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['CPU_with_stand(right)Shape_Rubber_0'].geometry}
          material={materials.Rubber_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['CPU_with_stand(right)Shape_Stand_0'].geometry}
          material={materials.Stand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboardShape_Base_0.geometry}
          material={materials.Base_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboardShape_Cord_0.geometry}
          material={materials.Cord_17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboardShape_Keys_0.geometry}
          material={materials.Keys_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard2Shape_Base_0.geometry}
          material={materials.Base_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard2Shape_Cord_0.geometry}
          material={materials.Cord_16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard2Shape_Keys_0.geometry}
          material={materials.Keys_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard2Shape_Plug_0.geometry}
          material={materials.Plug_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LED_cableShape_default_0.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LEDscreenShape_Frame_0.geometry}
          material={materials.Frame_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LEDscreenShape_LEDscreen_Material_0.geometry}
          material={materials.LEDscreen_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LED_left_cableShape_Cord_0.geometry}
          material={materials.Cord_15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LEDsmallscreenShape_Frame_0.geometry}
          material={materials.Frame_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LEDsmallscreenShape_Screen_0.geometry}
          material={materials.Screen_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mouseShape_Cord_0.geometry}
          material={materials.Cord_13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mouseShape_Mouse_0.geometry}
          material={materials.Mouse_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pentabletShape_Pen_Tablet_0.geometry}
          material={materials.Pen_Tablet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tableShape_Black_0.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tableShape_Frame_0.geometry}
          material={materials.Frame_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tableShape_Table_0.geometry}
          material={materials.Table}
        />
      </group>
    </group>
  )
}

export default PC