import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsDemo = [{
//   title: 'Project1',
//   description: 'this random text about the project forst and TBH i didn/t know when and where i build my first project, maybe when i was in school most probably you can say that'
// },
// {
//   title: 'Project2',
//   description: 'this random text about the project forst and TBH i didn/t know when and where i build my first project, maybe when i was in school most probably you can say that'
// },
// {
//   title: 'Project3',
//   description: 'this random text about the project forst and TBH i didn/t know when and where i build my first project, maybe when i was in school most probably you can say that'
// },{
//   title: 'Project4',
//   description: 'this random text about the project forst and TBH i didn/t know when and where i build my first project, maybe when i was in school most probably you can say that'
// },
// {
//   title: 'Project5',
//   description: 'this random text about the project forst and TBH i didn/t know when and where i build my first project, maybe when i was in school most probably you can say that'
// },{
//   title: 'Project6',
//   description: 'this random text about the project forst and TBH i didn/t know when and where i build my first project, maybe when i was in school most probably you can say that'
// }];


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
        <div>
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title> {title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                 {tags.map((tag, i) => (
                   <Tag key={i}>{tag}</Tag>
                 ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>

            </UtilityList>

          </BlogCard>
          
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;