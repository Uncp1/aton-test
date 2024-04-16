import { FC } from 'react';
import { Paper, Select, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import styles from './client-item.module.css';

interface IClient {
  lastName: string;
  firstName: string;
  surname: string;
  status: string;
  inn: string;
  accountNumber: string;
}

const ClientItem: FC<IClient> = ({ lastName, firstName, surname, status, inn, accountNumber }) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const changeClientStatus = () => {
    // TODO: change client status
  };

  const clientBackgroundColor = colorScheme === 'dark' ? '#1c1c21' : theme.colors.gray[0];
  console.log(status);
  return (
    <Paper
      style={{ backgroundColor: clientBackgroundColor }}
      shadow="xs"
      radius="lg"
      className={styles.client}
    >
      <p>
        {lastName} {firstName} {surname}
      </p>

      <p>Инн: {inn}</p>
      <p>Номер счета: {accountNumber}</p>
      <Select value={status} data={['Не в работе', 'В работе']} onChange={changeClientStatus} />
    </Paper>
  );
};

export default ClientItem;
