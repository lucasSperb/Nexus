import { useApp } from "../../context/AppContext";

export default function NotificationsPanel() {
  const { notifications } =
    useApp();

  return (
    <div className="panel-card">
      <h3>🔔 Notifications</h3>

      <div className="notifications-list">
        {notifications.length === 0 ? (
          <p>
            Nenhuma notificação ainda.
          </p>
        ) : (
          notifications.map((item) => (
            <div
              className="notification-item"
              key={item.id}
            >
              {item.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}