import { Box, Img, Text, Wrap } from './style';

export const Card = (props) => {
  return (
    <Wrap
      data-aos='fade-up'
      data-aos-delay={props.$delay}
      data-aos-duration='1000'
    >
      <Box $color={props.$color}>
        <Img src={props.$img} />
      </Box>
      <Text>{props.$text}</Text>
    </Wrap>
  );
};
