import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors, Text } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "./Login.styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = (email, password) =>
    React.useCallback(() => {
      console.log("Email: ", email);
      console.log("Password: ", password);
    }, [email, password]);
  return (
    <AccountBackground>
      <Title>Login</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {!!error && (
          <ErrorContainer size="large">
            <Text>{error}</Text>
          </ErrorContainer>
        )}
        <Text>Render counts:{renderCount}</Text>
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
    </AccountBackground>
  );
};
