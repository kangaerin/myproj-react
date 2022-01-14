import { Link } from 'react-router-dom';

function TelephoneName({ number }) {
  return (
    <div className="mb-3">
      <h3 className="mb-10 mr-20 ml-20 bg-red-50 px-4 text-center place-content-center">
        {/* {JSON.stringify(number)} */}

        <Link to={`/telephone_book/${number.id}/`}>{number.name}</Link>
      </h3>
    </div>
  );
}

export default TelephoneName;
