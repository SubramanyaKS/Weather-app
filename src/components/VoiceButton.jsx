import React from 'react';
import '../assets/voice.css'
import VoiceButtonUI from './VoiceButtonUI';
import { useVoiceButtonLogic } from '../hook/useVoiceButtonlogic';

const VoiceButton = () => {
  const { handleClick, listening } = useVoiceButtonLogic();

  return (
    <VoiceButtonUI listening={listening} handleClick={handleClick} />
  );
};

export default VoiceButton;