import { FC, useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import ClientItem from '@/components/client-item/client-item';
import styles from './styles.module.css';
import { getClients } from '@/utils/api';

interface ClientItemType {
  lastName: string;
  firstName: string;
  surname: string;
  status: string;
  inn: string;
  accountNumber: string;
}

export const HomePage: FC = () => {
  const [clientsData, setClientsData] = useState<ClientItemType[]>([]);
  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClientsData(data);
    };

    fetchClients();
  }, []);

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const generateClients = () => {
    setButtonDisabled(true);
    // TODO: generate clients
  };
  return (
    <main className={styles.layout}>
      <h2 className={styles.title}>Ваши клиенты</h2>

      <Button disabled={isButtonDisabled} onClick={generateClients} variant="light" radius="xl">
        Сгенерировать клиентов
      </Button>
      <section className={styles.clientsList}>
        {clientsData.map((item, index) => (
          <ClientItem
            key={index}
            lastName={item.lastName}
            firstName={item.firstName}
            surname={item.surname}
            status={item.status}
            inn={item.inn}
            accountNumber={item.accountNumber}
          />
        ))}
      </section>
    </main>
  );
};
