import TelephoneForm from 'components/telephone/TelephoneForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageTelephoneBook_Form() {
  const navigate = useNavigate();

  const { numberId } = useParams();

  return (
    <TelephoneForm
      numberId={numberId}
      handleDidSave={(savedNumver) =>
        navigate(`/telephone_book/${savedNumver.id}/`)
      }
    />
  );
}

export default PageTelephoneBook_Form;
