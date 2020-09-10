import React from 'react';
import LinkedInLogo from '../../assets/linkedin.svg';
import GitHubLogo from '../../assets/github.svg';

import {
  Header,
  Container,
  PreviewContainer,
  BorderRadiusValues,
  RightSide,
  SocialMedia,
} from './styles';

const Previewer: React.FC = () => {
  return (
    <>
      <Header>
        <h1>Border-Radius Previewer</h1>
      </Header>
      <Container>
        <PreviewContainer>
          <div />
        </PreviewContainer>

        <RightSide>
          <BorderRadiusValues>
            <div>
              <input type="number" value="10%" />
              <input type="number" value="10%" />
              <input type="number" value="10%" />
              <input type="number" value="10%" />
            </div>
            <div>
              <input type="number" value="10%" />
              <input type="number" value="10%" />
              <input type="number" value="10%" />
              <input type="number" value="10%" />
            </div>

            <div>
              <span>10% 10% 10% 10% / 10% 10% 10% 10%</span>
              <span>Copy</span>
            </div>
          </BorderRadiusValues>

          <SocialMedia>
            <img src={LinkedInLogo} alt="LinkedIn" />
            <img src={GitHubLogo} alt="GitHub" />
          </SocialMedia>
        </RightSide>
      </Container>
    </>
  );
};

export default Previewer;
