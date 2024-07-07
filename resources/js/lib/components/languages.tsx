import { Chip, Group, Tooltip } from '@mantine/core';

type LanguagesProps = {
  languages: string[];
}

export function Languages({languages}: LanguagesProps) {
  return (
    <Chip.Group>
      <Group>
        {languages.map((lang: string, index) => (
          <Tooltip
            key={lang}
            label={`Priority: ${index + 1}`}
            refProp="rootRef"
          >
            <Chip>{lang}</Chip>
          </Tooltip>
        ))}
      </Group>
    </Chip.Group>
  );
}