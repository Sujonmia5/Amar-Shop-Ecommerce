import ReactDom from 'react-dom/client'
import App from './App';
import './index.css'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import StateContext from './Context/StateContext';
import TabsContext from './Context/TabsContext';

const queryClient = new QueryClient()
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <StateContext>
            <TabsContext>
                <App />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </TabsContext>
        </StateContext>
    </QueryClientProvider>
)