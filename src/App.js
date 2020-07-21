import React from 'react';
import {useState} from 'react';
import { Container } from "react-bootstrap";
import useFetchJob from "./components/useFetchJob";
import Job from "./components/Job";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJob(params,page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>errorr ...</h1>}
      {jobs.map(job =>{
  return <Job key={job.id} job={job}/>        
      })}
    </Container>
  );
}

export default App;
