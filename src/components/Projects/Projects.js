import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>
      Projects
    </SectionTitle>
    <SectionText>
      Suggestify and Medicine Cabinet are the two projects that I feel best display my ability as a web developer.
    </SectionText>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
        <Img src={image}/>
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <br/>
        <Button onClick={() => window.location = "https://suggestify.netlify.app/"}>Visit Suggestify</Button>
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;