import { Flex, Switch } from '@chakra-ui/react';
import Link from 'next/link';

export type Page = {
  name: string;
  path: string;
};

export type NavBarProps = {
  pages: Page[];
  toggleDarkMode: () => void;
  currentTheme?: boolean;
};

export const defaultNavBarProps = [
  { name: 'Home', path: '/' },
  { name: 'Signup', path: '/signup' }
];

export default function NavBar({ pages, toggleDarkMode, currentTheme }: NavBarProps) {
  return (
    <Flex w={'50%'} h={'auto'} alignItems={'center'} justifyContent={'space-between'}>
      {pages.map((page, index) => (
        <Link key={index} href={page.path}>
          {page.name}
        </Link>
      ))}
      <Switch defaultChecked={currentTheme} colorScheme={'brand'} onChange={toggleDarkMode} />
    </Flex>
  );
}
