import { StyledCustomText, StyledText, StyledView } from './styled';

const StyledComponentDemo = () => {
  return (
    <StyledView color="white">
      <StyledText color="purple">Primary Text</StyledText>
      <StyledCustomText color="green"> Secondary Text</StyledCustomText>
    </StyledView>
  );
};

export default StyledComponentDemo;
