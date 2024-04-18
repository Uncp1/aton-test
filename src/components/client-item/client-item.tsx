import { FC, useState } from 'react';
import { Paper, Select, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import styles from './client-item.module.css';
import { ClientItemData } from '@/utils/types';
import { patchClient } from '@/utils/api';

const ClientItem: FC<ClientItemData> = ({
  lastName,
  firstName,
  surname,
  status,
  inn,
  accountNumber,
  _id,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const [isLoading, setIsLoading] = useState(false);

  const changeClientStatus = async (newStatus: string) => {
    setIsLoading(true);

    await patchClient(_id, newStatus);

    setIsLoading(false);
  };

  const clientBackgroundColor =
    colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.gray[0];

  const [value, setValue] = useState<string>(status);
  const handleValueChange = (newValue: string | null) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };
  return (
    <Paper
      style={{ backgroundColor: clientBackgroundColor }}
      shadow="xs"
      radius="lg"
      className={styles.client}
    >
      <h4 className={styles.text}>
        {lastName} {firstName} {surname}
      </h4>
      <p className={styles.text}>Инн: {inn}</p>
      <p className={styles.text}>Номер счета: {accountNumber}</p>

      <Select
        value={value}
        data={['Не в работе', 'В работе', 'Завершен']}
        onChange={handleValueChange}
        onOptionSubmit={(newStatus: string) => changeClientStatus(newStatus)}
        disabled={isLoading}
      />
    </Paper>
  );
};

export default ClientItem;
