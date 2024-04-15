import ClientItem from '@/components/client-item/client-item';
import styles from './styles.module.css';

export function HomePage() {
  const clientsData = [
    {
      lastName: 'Иванов',
      firstName: 'Иван',
      surname: 'Иванович',
      status: 'active',
    },
    {
      lastName: 'Петров',
      firstName: 'Иван',
      surname: 'Иванович',
      status: 'active',
    },
  ];
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
          />
        ))}
      </div>
    </main>
  );
}
