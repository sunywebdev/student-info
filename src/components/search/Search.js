import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Search = (props) => {
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Search Students ......."
                className="mb-3"
                style={{ color: "#FE676D" }}>
                <Form.Control onChange={props.search} type="text" placeholder="suny" style={{ border: "2px solid #FE676D" }} />
            </FloatingLabel>
        </div>
    );
};

export default Search;