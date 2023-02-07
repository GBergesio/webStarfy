import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Solutions from 'sections/solutions';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Starfy"
          description="Creamos soluciones en software"
        />
        <Banner />
        <Solutions />
        <UltimateFeatures />
        <Support />
        {/* <Pricing /> */}
        {/* <Clients /> */}
        {/* <Faq /> */}
      </Layout>
    </ThemeProvider>
  );
}
