import React from 'react';
import { BsPhone } from 'react-icons/bs';

import colors from '../config/colors';

export default function ImageContainer({ children }) {
  return <div style={styles.container}>{children}</div>;
}

const styles = {
  container: {
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
    height: 250,
    width: 250,
    border: `1px solid ${colors.white}`,
    borderRadius: '50% 50% 10% 50%',
    boxShadow: '5px 2px',
  },
};