import Sidebar from "../components/layout/Sidebar";

export default function Messages() {
  return (
    <div className="messages-layout">
      <Sidebar />

      <main className="messages-main">
        <div className="messages-sidebar">
          <h2>Messages</h2>

          <div className="chat-item">
            <img
              src="https://i.pravatar.cc/100?img=1"
              alt=""
            />

            <div>
              <h4>Ana</h4>
              <span>
                Última mensagem...
              </span>
            </div>
          </div>

          <div className="chat-item">
            <img
              src="https://i.pravatar.cc/100?img=2"
              alt=""
            />

            <div>
              <h4>John</h4>
              <span>
                Online agora
              </span>
            </div>
          </div>
        </div>

        <section className="chat-area">
          <div className="chat-header">
            <h3>Ana</h3>
          </div>

          <div className="chat-messages">
            <div className="message received">
              O Nexus ficou incrível 🔥
            </div>

            <div className="message sent">
              Valeuuu 🚀
            </div>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
            />

            <button>
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}