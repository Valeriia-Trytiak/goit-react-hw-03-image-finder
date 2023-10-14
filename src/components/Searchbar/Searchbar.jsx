import { Formik, Form, Field  } from 'formik';
import { TbCameraSearch } from 'react-icons/tb';


export const Searchbar = ({ onSubmit })=> {
    return  <header>
        <Formik
        initialValues={{ searchValue: ""}}
        onSubmit={(values, actions) => {
            const valueSearch = values.searchValue.trim();
            onSubmit(valueSearch);
            actions.resetForm();
        }}>
        <Form>
        <button type="submit">Submit</button>
        <label htmlFor="searchValue"></label>
        <TbCameraSearch />
        <Field type="text" name="searchValue" id="searchValue" placeholder="Search images and photos"  autoComplete="off" autoFocus/>
      </Form>
    </Formik>
    </header>
}
