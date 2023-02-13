import Template from '@/components/Template';
import Head from 'next/head';
import { Box, Grid, Heading, Text, Flex } from '@chakra-ui/react';
import CenteredGridItem from '@/components/CenteredGridItem';

export function Map() {
  return <Box bg={'white'} w="700px" h="600px" m={50} />;
}

export function Content() {
  return (
    <Grid gridTemplateColumns={'1fr auto'}>
      <CenteredGridItem>
        <Map />
      </CenteredGridItem>
      <CenteredGridItem>
        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} m={50}>
          <Heading textAlign={'center'}>Innovation for Impact Pledge</Heading>
          <Text p={10} fontSize={20}>
            The Innovation for Impact Pledge (I2P) is a platform that connects impact innovators and
            advocates to promote progress towards the UN Sustainable Development Goals. Start-ups
            and organizations commit to making certain SDGs a part of their strategic objectives and
            business operations, while individuals pledge to support and advocate for innovations
            that contribute to achieving the SDGs. In return, NUS ISI will provide carbon offsets to
            each start-up and individual who pledges.
          </Text>
          <Text p={10} pt={0} fontSize={20}>
            The I2P website features a virtual interactive map that showcases the Sustainable
            Development Goals (SDG) impact of NUS start-ups. Users can explore start-ups related to
            a particular SDG and learn more about their impact efforts and accomplishments.
          </Text>
        </Flex>
      </CenteredGridItem>
    </Grid>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>I2P</title>
      </Head>
      <main style={{ overflow: 'hidden' }}>
        <Template>
          <Content />
        </Template>
      </main>
    </>
  );
}
