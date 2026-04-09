import styled from 'styled-components/native';

export const StyledView = styled.View`
  background-color: ${({ color }) => color};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${({ color }) => color};
  font-size: 30;
`;

export const StyledCustomText = styled.Text`
  color: ${({ color }) => color};
  font-size: 30;
`;
