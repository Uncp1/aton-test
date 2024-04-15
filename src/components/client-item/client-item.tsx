import { FC } from 'react';
import { Select } from '@mantine/core';
import styles from './client-item.module.css';

interface IClient {
  lastName: string;
  firstName: string;
  surname: string;
  status: string;
}

const ClientItem: FC<IClient> = ({ lastName, firstName, surname, status }) => {
  const changeClientStatus = () => {
    // TODO: change client status
  };

  return (
    <div className={styles.client}>
      <p>
        {lastName} {firstName} {surname}
      </p>

      <Select value={status} data={['active', 'finished']} onChange={changeClientStatus} />
    </div>
  );
};

export default ClientItem;
