import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="21981bd3-2541-4cfb-8d37-ddce12b4d95e"
            userName="shayedashraf"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />
            }

        />
    );
}
export default App;


