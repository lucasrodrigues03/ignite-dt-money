import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: transparent;
    border: 2px solid ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-500']};
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s,
      box-shadow 0.2s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      box-shadow: black 5px 5px 5px;
    }
  }
`
