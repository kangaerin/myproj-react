import Alert from 'components/Alert';

function Components() {
  return (
    <div>
      <h2 className="text-xl border-l-8 border-lime-500 pl-1 mb-1">
        Components
      </h2>
      <h3 className="text-lg border-l-4 border-lime-500 pl-1 mb-1">Alerts</h3>
      <Alert type="info" message="info 메세지입니다." />
      <Alert type="success" message="success 메세지입니다." />
      <Alert type="danger" message="danger 메세지입니다." />
    </div>
  );
}

export default Components;
