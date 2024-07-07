import { Dictionary } from '@/types/types';
import { Table } from '@mantine/core';
import classes from './dictionary-table.module.css';

type DictionaryTableProps = {
  dictionary: Dictionary<string>;
}
export function DictionaryTable({ dictionary }: DictionaryTableProps) {
  const rows = Object.keys(dictionary).map(key => (
    <Table.Tr key={key}>
      <Table.Td>{key}</Table.Td>
      <Table.Td className={classes.tableTd}>{dictionary[key]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}