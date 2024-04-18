import { FC, useEffect, useState } from 'react';
import { Button, Loader } from '@mantine/core';
import ClientItem from '@/components/client-item/client-item';
import styles from './styles.module.css';
import { getClients, postClient } from '@/utils/api';
import { useAppSelector } from '@/utils/hooks/useApp';
import { generateClientsData } from '@/utils/generateClients';

interface ClientItemType {
  lastName: string;
  firstName: string;
  surname: string;
  status: string;
  inn: string;
  accountNumber: string;
  _id: string;
}

export const HomePage: FC = () => {
  const { username } = useAppSelector((store) => store.user);

  const [clientsData, setClientsData] = useState<ClientItemType[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchClients = async () => {
      const data = await getClients(username);
      setClientsData(data);
      setIsLoading(false);
    };

    fetchClients();
  }, []);

  const generateClient = () => {
    const client = generateClientsData(username);

    const newClient = { ...client, _id: `temp-${Date.now().toString()}` };
    postClient(client);
    setClientsData([...clientsData, newClient]);
  };

  const renderClientsList = () => {
    if (isLoading) {
      return (
        <>
          <p>Загрузка данных...</p>
          <Loader size="xl" />
        </>
      );
    }
    if (clientsData.length === 0) {
      return <p>У вас пока нет клиентов</p>;
    }
    return (
      <>
        {clientsData.map((item, index) => (
          <ClientItem
            key={index}
            lastName={item.lastName}
            firstName={item.firstName}
            surname={item.surname}
            status={item.status}
            inn={item.inn}
            accountNumber={item.accountNumber}
            _id={item._id}
          />
        ))}
      </>
    );
  };

  return (
    <main className={styles.layout}>
      <h2 className={styles.title}>Здравствуйте, {username}</h2>

      <Button onClick={generateClient} variant="light" radius="xl">
        Сгенерировать клиента
      </Button>
      <section className={styles.clientsList}>{renderClientsList()}</section>
    </main>
  );
};
