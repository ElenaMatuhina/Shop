import { useAlertName } from '../hooks/use-alert-name';

function Alert() {
  const alertName = useAlertName();

  return (
    <div id="toast-container">
      <div className="toast">{alertName} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
