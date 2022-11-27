import react from 'react';
import {StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const carmeraPemmisionInit = async (): Provise<void> => {
  const cameraPermmision = await Camera.getPermissionstatus();
  const microphonePermission = await Camera.getMicrophonePermissionStatus();
};
const newCameraPermission = await Camera.requestCameraPermission();
const newMicrophonePermission = await Camera.requestMicrophonePermission();

export default function CameraSection() {
  const devices = useCameraDevices();
  const device = devices.back;
  if (device == null) {
    return <LoadingView />;
  }
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
