import { ReactNode } from 'react';
import { Dictionary } from '@/types/types';
import { Head } from '@inertiajs/react';
import { AppShell, Card, Container, Divider, Flex, Text } from '@mantine/core';
import { Logo } from '@/lib/components/logo';
import { Languages } from '@/lib/components/languages';
import { DictionaryTable } from '@/lib/components/dictionary-table';
import { IpAddresses } from '@/lib/components/ip-addresses';
import { QueryString } from '@/lib/components/query-string';
import { Footer } from '@/lib/components/footer';

type SectionProps = {
  title: string;
  children?: ReactNode;
}

function Section({title, children}: SectionProps) {
  return (
    <Card mb="sm">
      <Text fw={500}>{title}</Text>

      <Card.Section mt="sm">
        {children}
      </Card.Section>
    </Card>
  );
}

type HomeProps = {
  cookies: Dictionary<string>;
  languages: string[];
  headers: Dictionary<string>;
  query: string[];
}
export default function Home({cookies, languages, headers, query}: HomeProps) {
  return (
    <>
      <Head title="Client info"/>

      <AppShell>
        <AppShell.Header>
          <Flex align="center" ml="sm" p="md">
            <Logo height={36}/>
            <Text ml="sm">IPLease</Text>
          </Flex>
        </AppShell.Header>

        <AppShell.Main p="md" mt="md">
          <Container fluid mt="xl">
            <Card mb="sm">
              <Text fz="h1" fw={600}>IP Addresses</Text>

              <Card.Section ml="sm">
                <IpAddresses/>
              </Card.Section>
            </Card>

            <Divider/>

            <Section
              title="Cookies"
            >
              <DictionaryTable dictionary={cookies}/>
            </Section>

            <Divider/>

            <Section
              title="Languages"
            >
              <Languages languages={languages}/>
            </Section>

            <Divider/>

            <Section
              title="Headers"
            >
              <DictionaryTable dictionary={headers}/>
            </Section>

            <Divider/>

            <Section
              title="Query string"
            >
              <QueryString query={query}/>
            </Section>
          </Container>
        </AppShell.Main>

        <AppShell.Footer>
          <Footer/>
        </AppShell.Footer>
      </AppShell>
    </>
  );
}