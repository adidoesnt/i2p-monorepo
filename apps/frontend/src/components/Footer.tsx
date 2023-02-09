import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <Flex justifyContent={'flex-end'} w={'95%'} overflow={'none'}>
      <Link
        href={
          'https://enterprise.nus.edu.sg/supporting-entrepreneurs/societal-impact-initiatives/nus-i2p'
        }
        target={'_blank'}>
        More information
      </Link>
    </Flex>
  );
}
