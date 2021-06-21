import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br />
        i'am Vineet Srivastav


      </SectionTitle>
      <SectionText>
        It's a React based Portfolio, if you source code of this React web you can find it on my Github.
      </SectionText>
      <Button Onclick={() => window.location = 'https://vineetgeek.com'}>Learn More</Button>

    </LeftSection>

  </Section>
);

export default Hero;