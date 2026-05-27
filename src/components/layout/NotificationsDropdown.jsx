import { useApp } from "../../context/AppContext";

export default function NotificationsDropdown() {
  const { notifications } =
    useApp();

  return (
    <div className="notifications-dropdown">
      <h3>Notifications</h3>

      {notifications.length === 0 ? (
        <p>
          Nenhuma notificação.
        </p>
      ) : (
        notifications.map((item) => (
          <div
            key={item.id}
            className="notification-card"
          >
            {item.text}
          </div>
        ))
      )}
    </div>
  );
}