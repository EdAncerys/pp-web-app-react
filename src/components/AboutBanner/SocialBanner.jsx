import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillMediumSquare } from 'react-icons/ai';

import colors from '../../config/colors';
import IconComponent from '../IconComponent';

export default function SocialBanner({ props }) {
  return (
    <div style={styles.container}>
      <IconComponent
        icon={<AiFillLinkedin size={36} />}
        hoverColor={colors.blue}
        onClick={() =>
          window.open('https://www.linkedin.com/in/ancerys/', '_blank')
        }
      />
      <IconComponent
        icon={<AiFillGithub size={36} />}
        hoverColor={colors.blue}
        onClick={() =>
          window.open('https://www.linkedin.com/in/ancerys/', '_blank')
        }
      />
      <IconComponent
        icon={<AiOutlineInstagram size={36} />}
        hoverColor={colors.blue}
        onClick={() =>
          window.open('https://www.linkedin.com/in/ancerys/', '_blank')
        }
      />
      <IconComponent
        icon={<AiFillMediumSquare size={36} />}
        hoverColor={colors.blue}
        onClick={() =>
          window.open('https://www.linkedin.com/in/ancerys/', '_blank')
        }
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    columnGap: 10,
    marginTop: 50,
    marginBottom: 50,
  },
};
