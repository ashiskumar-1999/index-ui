import React, { useMemo } from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'
import Select from 'react-select'
import { useTheme } from 'react-neu'

const CustomOption = (props: any) => {
  const { innerProps, value, label, data } = props

  if (data?.link) {
    return (
      <CustomDropdownOption {...innerProps}>
        <StyledOutboundLink href={data.link} target='_blank'>
          {label}
        </StyledOutboundLink>
      </CustomDropdownOption>
    )
  }

  return (
    <CustomDropdownOption {...innerProps}>
      <StyledLink exact activeClassName='active' to={`/${value}`}>
        {label}
      </StyledLink>
    </CustomDropdownOption>
  )
}

const GovernanceDropdown: React.FC = () => {
  const theme = useTheme()
  const { pathname } = useLocation()

  const dropdownSelectStyles = useMemo(() => {
    const isResourcesRouteActive =
      pathname === '/index' ||
      pathname === '/vote' ||
      pathname === '/rewards'

    return {
      control: (styles: any) => ({
        ...styles,
        width: 140,
        background: 'none',
        border: 'none',
      }),
      singleValue: (styles: any) => ({
        ...styles,
        'color': isResourcesRouteActive
          ? theme.colors.primary.light
          : theme.colors.grey[500],
        'fontWeight': 600,
        'cursor': 'pointer',
        '&:hover': {
          color: isResourcesRouteActive
            ? theme.colors.primary.light
            : theme.colors.grey[600],
        },
      }),
      menu: (styles: any) => ({
        ...styles,
        width: 200,
        color: 'black',
      }),
      dropdownIndicator: (styles: any) => ({
        ...styles,
        'color': isResourcesRouteActive
          ? theme.colors.primary.light
          : theme.colors.grey[500],
        'cursor': 'pointer',
        '&:hover': {
          color: isResourcesRouteActive
            ? theme.colors.primary.light
            : theme.colors.grey[500],
        },
      }),
      indicatorSeparator: () => ({}),
      indicatorContainer: (styles: any) => ({
        ...styles,
        marginLeft: 0,
        padding: 0,
      }),
    }
  }, [theme, pathname])

  return (
    <Select
      isSearchable={false}
      value={{ label: 'Governance' }}
      options={[
        {
          value: 'index',
          label: 'Index Coop Token',
        },
        {
          value: 'vote',
          label: 'Vote',
          link: 'https://snapshot.org/#/index-coop.eth'
        },
        {
          value: 'handbook',
          label: 'Handbook',
          link: 'https://docs.indexcoop.com/',
        },
        {
          value: 'rewards',
          label: 'Rewards',
        }
      ]}
      components={{
        Option: CustomOption,
      }}
      styles={dropdownSelectStyles}
    />
  )
}

const CustomDropdownOption = styled.div`
  width: 190px;
  margin: 10px;
  overflow: hidden;
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
  &.active {
    color: ${(props) => props.theme.colors.primary.light};
  }
`

export default GovernanceDropdown
