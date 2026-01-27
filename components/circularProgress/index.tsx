import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

type CircularProps = {
  size: number;
  progress: number;
  strokeWidth?: number;
  fill1: string;
  fill2: string;
  children?: React.ReactNode;
  id: string;
  track?: boolean;
};

function Circular({
  size = 240,
  progress = 0.6,
  strokeWidth = 20,
  fill1,
  fill2,
  children,
  id,
  track = true,
}: CircularProps) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={fill1} />
            <Stop offset="100%" stopColor={fill2} />
          </LinearGradient>
        </Defs>

        {/* Track */}
        {track && (
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#3f3f46"
            strokeWidth={strokeWidth}
            fill="none"
          />
        )}

        {/* Progress */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={`url(#${id})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          rotation={90}
          originX={center}
          originY={center}
        />
      </Svg>

      {/* Children */}
      <View style={styles.center} pointerEvents="none">
        {children}
      </View>
    </View>
  );
}

export default Circular;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
