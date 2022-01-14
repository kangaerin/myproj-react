import { Link } from 'react-router-dom';

function TelephoneName({ number }) {
  return (
    <div className="mb-3">
      <h3 className="mb-10 bg-slate-50 md:w-20 px-4 ">
        {/* {JSON.stringify(number)} */}
        <Link to={`/telephone_book/${number.id}/`}>{number.name}</Link>
      </h3>
    </div>
  );
}

export default TelephoneName;
