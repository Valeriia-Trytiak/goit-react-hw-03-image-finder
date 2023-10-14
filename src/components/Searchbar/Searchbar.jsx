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
        <label htmlFor="searchValue"></label>
        <TbCameraSearch />
        <Field type="text" name="searchValue" id="searchValue" placeholder="Search images and photos" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </header>
}
