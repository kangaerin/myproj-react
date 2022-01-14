import TelephoneDetail from 'components/telephone/TelephoneDetail';
import { useParams } from 'react-router-dom';

function PageTelephoneBook_detail() {
  const { numberId } = useParams();

  return (
    <div>
      <h2>주소록 내용</h2>
      <TelephoneDetail numberId={numberId} />
    </div>
  );
}

export default PageTelephoneBook_detail;
