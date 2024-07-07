import { Table } from '@mantine/core';

type QueryStringProps = {
  query: string[];
}
export function QueryString({query}: QueryStringProps) {
  const rows = Object.entries(query).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td>{key}</Table.Td>
      <Table.Td>{value}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}