import React, { Component } from 'react'
import image from '../img.jpg'
import styled from 'styled-components'

const Icon = styled.i`
    color: grey;
`;
const LeftBar = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`;
const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 20px auto;
`;
const Section = styled.div`
    display: flex;
    flex-directon: row;
    justify-content: space-between;
    align-items: center;
    &:hover ${Icon} {
      color: #000;
      font-size: 16px;
      transition: font-size .5s ease-in;
    }
`;
const ImageBox = styled.div`
    height: 150px;
    width: 150px;
    padding: 2px;
    background: white;
    border: 2px solid lightblue;
    overflow: hidden;
    @media screen and (max-width: 400px){
      height: 120px;
      width: 120px;
    }
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
`;
const TextBox = styled.div`
    padding: 0 10px;
`;
const H5 = styled.h5`
    font-size: 28px;
    padding: 0;
`;
const P = styled.p`
    font-size: 14px;
    padding:0 10px 10px 0;
`;
const Textarea = styled.textarea`
    max-width: 500px;
    min-width: auto;
    min-height: 60px;
    margin: 20px 10px;
    padding: 20px;
    resize: none;
    border-radius: 8px;
`;
class Profile extends Component {
  render(){
    return(
      <div>
          <div className="row">
              <div className="col s12 m6 l5">
              <LeftBar>
                  <RowFlex>
                      <ImageBox>
                          <Image src={image} alt="Profile Picture"></Image>
                      </ImageBox>
                      <TextBox>
                          <H5>Jane Doe</H5>
                          <P className="grey-text text-darken-3">Professor</P>
                      </TextBox>
                  </RowFlex>
                  <div class="divider"></div>

                  <div>
                      <Section>
                          <h6 className="">Institution</h6>
                          <Icon className="far fa-edit"></Icon>
                      </Section>
                      <P className="grey-text text-darken-3">American Internatonal University of Bangladesh</P>
                  </div>

                  <div className="divider"></div>

                  <div>
                      <Section>
                          <h6 className="">Research Areas</h6>
                          <Icon className="far fa-edit"></Icon>
                      </Section>
                      <P className="grey-text text-darken-3">Add something</P>
                  </div>

                  <div className="divider"></div>

                  <div>
                      <Section>
                          <h6 className="">Skills</h6>
                          <Icon className="far fa-edit"></Icon>
                      </Section>
                      <P className="grey-text text-darken-3">No skills added</P>
                  </div>

                  <div className="divider"></div>

                  <div>
                      <Section>
                          <h6 className="">External Links</h6>
                          <Icon className="far fa-edit"></Icon>
                      </Section>
                      <P className="grey-text text-darken-3"></P>
                  </div>
              </LeftBar>
              </div>

              <div className="col s12 m6">
                  <h5>All your writings will go here.</h5>
              </div>
          </div>
      </div>
    )
  }
}

export default Profile
