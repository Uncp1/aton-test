import { FC, useEffect, useState } from 'react';
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

  return (
    <main className={styles.clients}>
      <h2>Ваши клиенты</h2>
      <div>
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
      </div>
    </main>
  );
};
