import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';
import { TbCameraSearch } from 'react-icons/tb';

export const HeaderSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.spacing(6)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.spacing(2)};
  overflow: hidden;
`;

export const StyledInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spacing(1)};
  padding-right: ${p => p.theme.spacing(1)};

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const SearchIcon = styled(TbCameraSearch)`
  position: absolute;
  top: 9px;
  left: 6px;
  font-size: 25px;
  color: ${p => p.theme.colors.grey};
`;

export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;
