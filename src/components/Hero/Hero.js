import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Christian  Corby <br />
        Full Stack Web Developer
      </SectionTitle>
      <SectionText>
        Based in Vero Beach, FL
      </SectionText>
      <Button onClick={() => window.location = 'mailto:christiancorby@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;