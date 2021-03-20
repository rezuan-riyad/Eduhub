import React from 'react'
import { fixedCardHeight, bottomNavHeight, minDeviceWidth } from '../../variables.js'

import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    bottom: ${bottomNavHeight};
    background: #eee;
    height: ${fixedCardHeight};
    width: 100%;
    box-shadow: 0 0 40px grey;
`;
const Div = styled.div`
    margin: 90px auto 0 auto;
    padding: 0 10px;
    max-width: 500px;
    min-width: ${minDeviceWidth};
`;
const Section = styled.div `
    width: 100%;
    height: auto;
`;
const P = styled.p`
    font-size: 14px;
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
    margin: 5px 0;
`;
class  BottomNotify extends React.Component {
  render(){
    return (
      <Container>
          <Div>
              <h5>Notification</h5>
              <Section>
                  <P><strong>John Doe</strong> wrote about Quantum Mechanics.
                  about Quantum Mechanics.
                  about Quantum Mechanics.</P>
                  <Time>8:30PM, Today</Time>
                  <Line></Line>
              </Section>
              <Section>
                  <P><strong>Naqib Saleh</strong> wrote about Politics.</P>
                  <Time>8:30PM, Today</Time>
                  <Line></Line>
              </Section>
              <Section>
                  <P><strong>John Doe</strong> wrote about Quantum Mechanics.</P>
                  <Time>8:30PM, Today</Time>
                  <Line></Line>
              </Section>
          </Div>
      </Container>
    )
  }
}
export default BottomNotify
