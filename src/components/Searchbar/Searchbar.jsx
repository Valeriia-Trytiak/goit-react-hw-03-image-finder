import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TbCameraSearch } from 'react-icons/tb';

const searchSchema = Yup.object().shape({
    searchValue: Yup.string()
      .trim()
      .required('Enter search value')
      .min(2, 'Minimum length - 2 characters')
      .max(20, 'Maximum length - 20 characters'),
  });

export const Searchbar = ({ onSubmit })=> {
    return  <header>
        <Formik
        initialValues={{ searchValue: ""}}
        onSubmit={(values, actions) => {
            const valueSearch = values.searchValue;
            onSubmit(valueSearch);
            actions.resetForm();
        }}
        validationSchema={searchSchema}
        >
        <Form>
        <button type="submit">Submit</button>
        <label htmlFor="searchValue"></label>
        <TbCameraSearch />
        <Field type="text" name="searchValue" id="searchValue" placeholder="Search images and photos"  autoComplete="off" autoFocus/>
        <ErrorMessage name="searchValue" component="span" />
      </Form>
    </Formik>
    </header>
}
