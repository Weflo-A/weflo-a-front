import colors from 'src/constants/colors';
import styled from 'styled-components';
import { Search as SearchImg } from 'src/assets';
//
//
//

interface SearchProp {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  padding: 11px 8px 11px 12px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid ${colors.basic200};
  background: ${colors.basic50};
`;

const SearchInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.basic400};
    /* Caption/C2/Regular */
    font-size: 11px;
    font-weight: 400;
    line-height: 150%; /* 16.5px */
  }
`;

//
//
//

const Search = ({ placeholder, value, onChange, onClick }: SearchProp) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <SearchImg onClick={onClick} />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default Search;
