import { GridItem, Center, GridItemProps } from '@chakra-ui/react';

export default function CenteredGridItem({ w, h, children, display }: GridItemProps) {
  return (
    <GridItem w={w} h={h} display={display}>
      <Center>{children}</Center>
    </GridItem>
  );
}
