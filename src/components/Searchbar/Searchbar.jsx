import { Formik, Form, Field  } from 'formik';
import { TbCameraSearch } from 'react-icons/tb';


export const Searchbar = ({ onSubmit })=> {
    return  <header>
        <Formik
        initialValues={{ searchValue: ""}}
        onSubmit={(value, actions) => {
         console.log(value)
         onSubmit(value);
            actions.resetForm();
        }}>
        <Form>
        <label htmlFor="searchValue"></label>
        <TbCameraSearch />
        <Field type="text" name="searchValue" placeholder="Search images and photos" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </header>
}
