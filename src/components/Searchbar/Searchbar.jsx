import { Formik } from 'formik';
import * as Yup from 'yup';
import { Error, HeaderSearchbar, SearchButton, SearchIcon, StyledForm, StyledInput } from './Searchbar.syuled';

const searchSchema = Yup.object().shape({
    searchValue: Yup.string()
      .trim()
      .min(2, 'Minimum length - 2 characters')
      .max(20, 'Maximum length - 20 characters'),
  });

export const Searchbar = ({ onSubmit })=> {
    return  <HeaderSearchbar>
        <Formik
        initialValues={{ searchValue: ""}}
        onSubmit={(values, actions) => {
            const valueSearch = values.searchValue;
            onSubmit(valueSearch);
            actions.resetForm();
        }}
        validationSchema={searchSchema}
        >
        <StyledForm>
        <SearchButton type="submit"> 
        <SearchIcon />
        </SearchButton>
        <label htmlFor="searchValue"></label>
        <StyledInput type="text" name="searchValue" id="searchValue" placeholder="Search images and photos"  autoComplete="off" autoFocus/>
        <Error name="searchValue" component="span" />
      </StyledForm>
    </Formik>
    </HeaderSearchbar>
}
