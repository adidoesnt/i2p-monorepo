import { Flex, Heading } from '@chakra-ui/react';
import NavBar, { defaultNavBarProps } from '@/components/NavBar';
import Link from 'next/link';

export type HeaderProps = {
  homePage?: boolean;
  toggleDarkMode: () => void;
  currentTheme?: boolean;
};

export default function Header({ toggleDarkMode, currentTheme }: HeaderProps) {
  return (
    <Flex justifyContent={'space-around'}>
      <Link href={'/'}>
        <Heading>Innovation for Impact Pledge</Heading>
      </Link>
      <NavBar
        pages={defaultNavBarProps}
        toggleDarkMode={toggleDarkMode}
        currentTheme={currentTheme}
      />
    </Flex>
  );
}
