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
  //const [error, setError] = useState(null | string);

  const changeClientStatus = async (newStatus: string) => {
    setIsLoading(true);

    await patchClient(_id, newStatus);

    setIsLoading(false);
  };

  const clientBackgroundColor = colorScheme === 'dark' ? '#1c1c21' : theme.colors.gray[0];
  const [value, setValue] = useState<string>(status);
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
        onChange={setValue}
        onOptionSubmit={(newStatus: string) => changeClientStatus(newStatus)}
        disabled={isLoading}
      />
    </Paper>
  );
};

export default ClientItem;
