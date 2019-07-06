import React from "react";
import { Text, ActivityIndicator } from "react-native";
import colors from "../../Themes/Colors";
import { Container } from "../../Components";
import useTheme from "../../Themes/Context";

export default function() {
  const { theme } = useTheme();

  return (
    <Container
      style={{
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text
        style={{
          color: "cyan",
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 10
        }}
      >
        LOADING Please wait...
      </Text>
    </Container>
  );
}
