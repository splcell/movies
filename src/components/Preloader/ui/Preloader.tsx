import Spinner from 'react-bootstrap/Spinner';

export function Preloader(){
  return(
    <Spinner animation="border" role="status" style={{marginTop: '20px'}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
