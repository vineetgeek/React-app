import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+917011070379">111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:contact@vineetgeek.in">contact@vineetgeek.in</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innvoating a project at a time
          </Slogan>
          
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/vineetgeek" target="_blank">
        <AiFillGithub size="3em"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/vineetgeek" target="_blank">
        <AiFillLinkedin size="3em"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/vineetgeek" target="_blank">
        <AiFillInstagram size="3em"/>
      </SocialIcons>
        </SocialContainer>
  
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
