import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ParticleLine from './particle-line';

const ParticleLineWraper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ChildWraper = styled.div`
  z-index: 1;
`;
const CanvasWraper = styled.canvas.attrs({
  id: 'react-particle-line-canvas',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class ReactParticleLine extends Component {
  static propTypes = {
    lineWidth: PropTypes.number,
    dotsNumber: PropTypes.number,
    dotsDistance: PropTypes.number,
    hoverEffect: PropTypes.bool,
  };

  static defaultProps = {
    lineWidth: 0.3,
    dotsNumber: 100,
    dotsDistance: 100,
    hoverEffect: true,
  };

  componentDidMount() {
    const { lineWidth, dotsNumber, dotsDistance, hoverEffect } = this.props;

    new ParticleLine('#react-particle-line-canvas', {
      lineWidth,
      dotsNumber,
      dotsDistance,
      hoverEffect,
    })
  }

  render() {
    return (
      <ParticleLineWraper>
        <ChildWraper>{this.props.children}</ChildWraper>
        <CanvasWraper />
      </ParticleLineWraper>
    );
  }
}
