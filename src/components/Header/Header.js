import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom: "25px"}}>
          <DiCssdeck size="3em" /><Span>Vineet Geek</Span>

        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
        </li>
        <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
        </li>
        <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
        </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vineetgeek" target="_blank">
        <AiFillGithub size="3em"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/vineetgeek" target="_blank">
        <AiFillLinkedin size="3em"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/vineetgeek" target="_blank">
        <AiFillInstagram size="3em"/>
      </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
