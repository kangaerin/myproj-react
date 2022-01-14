import TelephoneList from 'components/telephone/TelephoneList';

function PageTelephoneBook() {
  return (
    <div>
      <h2 className="mb-5 bg-gray-100 border border-gray-500 w-fit cursor-default">
        전화번호부
      </h2>
      <TelephoneList />
    </div>
  );
}

export default PageTelephoneBook;
