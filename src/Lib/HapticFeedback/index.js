import React from "react";
import { Vibration } from "react-native";
const DURATION = 500;

export default function hapticFeedback(duration) {
  Vibration.vibrate(duration || DURATION);
}
