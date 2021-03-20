import React from 'react'
import { minDeviceWidth, text_color } from '../../variables.js'

import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    right: 10%;
    top: 10vh;
    background: #eee;
    max-height: 90vh;
    min-height: auto;
    width: 400px;
    box-shadow: 0 0 40px grey;
`;
const Div = styled.div`
    margin: 0 auto 10px auto;
    padding: 0 15px 5px 15px;
    width: 100%;
`;
const Section = styled.div `
    width: 100%;
    height: auto;
`;
const P = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${text_color};
    line-height: 24px;
`;
const Time = styled.p`
    font-size: 12px;
    color: grey;
    margin: 0;
    line-height: 16px;
`;
const Line = styled.div`
    height: 1px;
    width: 100%;
    background: lightgrey;
    margin: 3px 0;
`;

class  Notifications extends React.Component {
  render(){
    return (
      <Container id="notification">
      <Div>
          <h5>Notification</h5>
          <Section>
              <Line></Line>
              <P><strong>Someone</strong> did that , Someone did this..</P>
              <Time>8:30PM, Today</Time>
          </Section>
          <Section>
              <Line></Line>
              <P><strong>Naqib Saleh</strong> wrote about politics.</P>
              <Time>8:30PM, Today</Time>
          </Section>
          <Section>
              <Line></Line>
              <P><strong>Jane Doe</strong> became an professor.</P>
              <Time>8:30PM, Today</Time>
          </Section>
      </Div>
      </Container>
    )
  }
}
export default Notifications
