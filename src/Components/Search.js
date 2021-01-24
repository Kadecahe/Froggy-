import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Search = () => {

  return (
    <div className=" m-3">
      <div>
        <h3>
          Enter your city for local resources of LGBT+ support groups, physicians, and resources
        </h3>
      </div>

      <Form className="d-flex justify-content-center">
        <div style={{width: "50%"}} className="d-flex justify-content-center">


        <Form.Control placeholder="City" />
        <Form.Control placeholder="Zipcode" />
        </div>
        <div className="m-2" variant="outline-primary">
        <Button>Search</Button>
        </div>

      </Form>
    </div>


  )
}

export default Search
