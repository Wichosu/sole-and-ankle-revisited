/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <FlexWrapper>
        <Button onClick={onDismiss}>
          <Icon id={'close'} color={COLORS.gray[900]} size={'24px'} strokeWidth={'2px'} />
        </Button>
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </FlexWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  background-color: ${COLORS.fade};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const FlexWrapper = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  padding: 26px 16px 32px 32px;
  justify-content: space-between;
  height: 100%;
  width: 75%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Link = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none;
  width: fit-content;

  &:hover {
    color: ${COLORS.secondary};
  }

  &:focus {
    color: ${COLORS.secondary};
  }

  ${Footer} & {
    color: ${COLORS.gray[700]};
  }
`;


export default MobileMenu;
