import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background-color: #0af;
  color: white;
`;

const Title = styled.h3`
  color: tomato;
`;

export default class Foo extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;
    return (
      <Wrapper>
        <Title>This is Title</Title>
        Component Foo: {text}
      </Wrapper>
    );
  }
}
