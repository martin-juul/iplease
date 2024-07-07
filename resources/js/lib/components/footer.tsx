import { Anchor, Box, Flex, Group } from '@mantine/core';

const links = [
  { link: 'https://juul.xyz', label: 'Juul.xyz' },
]

export function Footer() {
  const items = links.map((item) => (
    <Anchor
      key={item.label}
      href={item.link}
      lh={1}
    >{item.label}</Anchor>
  ));

  return (
    <Flex justify="center" pt={4}>
      <Group>{items}</Group>
    </Flex>
  )
}