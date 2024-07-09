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
    <Card mb="sm" mt="sm">
      <Card.Section>
        <Text size="lg" mb="sm" fw={600}>{title}</Text>

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
          <Flex justify="center" align="center" p="md">
            <Logo height={36}/>
            <Text ml="sm">IPLease</Text>
          </Flex>
        </AppShell.Header>

        <AppShell.Main>
          <Container fluid pt="xl" mt="xl">
            <Container>
              <Card mb="sm" withBorder shadow="sm" radius="md">
                <Flex align="center" direction="column">
                  <Card.Section ml="sm">
                    <Text fz="h1" fw={600} ta="center">Your IPs</Text>
                    <IpAddresses/>
                  </Card.Section>
                </Flex>
              </Card>
            </Container>

            <Divider mt="lg" />

            <Section
              title="Cookies"
            >
              <DictionaryTable dictionary={cookies}/>
            </Section>

            <Divider mt="lg" />

            <Section
              title="Languages"
            >
              <Languages languages={languages}/>
            </Section>

            <Divider mt="lg" />

            <Section
              title="Headers"
            >
              <DictionaryTable dictionary={headers}/>
            </Section>

            <Divider mt="lg" />

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