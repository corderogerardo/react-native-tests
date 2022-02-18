import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { Text } from 'react-native';

export const AccountBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 16px;
  margin-top: 16px;
`;

export const AuthButton = styled(Button)`
  color: black;
  padding: 16px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: 16px;
`;
