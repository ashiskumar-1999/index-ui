import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ProductsDropdown from './ProductsDropdown'
import GovernanceDropdown from './GovernanceDropdown'
import ResourcesDropdown from './ResourcesDropdown'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName='active' to='/'>
        Home
      </StyledLink>
      <ProductsDropdown />
      <GovernanceDropdown />
      <ResourcesDropdown />
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey[500]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.grey[600]};
  }
  &.active {
    color: ${(props) => props.theme.colors.primary.light};
  }
`
const StyledOutboundLink = styled.a`
  color: ${(props) => props.theme.colors.grey[500]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.grey[600]};
  }
`

export default Nav
