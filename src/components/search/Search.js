import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Search = (props) => {
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Search Students ......."
                className="my-3"
            >
                <Form.Control onChange={props.search} type="text" placeholder="suny" />
            </FloatingLabel>
        </div>
    );
};

export default Search;