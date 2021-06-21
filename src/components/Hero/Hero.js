import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Hello There!<br />
        i'am Vineet Srivastav


      </SectionTitle>
      <SectionText>
        This is a portfolio where i will be adding most of my details and link along with, it will helpo you to Judge me more accuratly. FUCK OFF Bitches/...
      </SectionText>
      <Button Onclick={() => window.location = 'https://vineetgeek.com'}>Learn More</Button>

    </LeftSection>

  </Section>
);

export default Hero;