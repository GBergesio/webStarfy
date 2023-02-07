/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';
import iconCode from 'assets/images/features/code.png';
import fix from 'assets/images/features/fix.png';
import support from 'assets/images/features/support.png';
import design from 'assets/images/features/design.png';

const data = [
  {
    id: 1,
    icon: iconCode,
    path: '#!',
    title: 'Desarrollo web',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Software a medida',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 3,
    icon: fix,
    path: '#!',
    title: 'Mantenimiento de sitios',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 4,
    icon: design,
    path: '#!',
    title: 'Diseño gráfico y modelado 3D',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Producciones audiovisuales',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 6,
    icon: support,
    path: '#!',
    title: 'Soporte al cliente',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Desarrollamos soluciones inteligentes para tu negocio."
          title="Nuestros servicios"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    // backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
