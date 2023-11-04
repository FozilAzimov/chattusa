import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactUsPage from "../pages/ContactUs";
import ChatPage from "../pages/Chat";

const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
    location: ''
  },
  {
    id: 2,
    element: <AboutPage />,
    title: 'About',
    path: '/about',
    private: false,
    hidden: false,
    location: ''
  },
  {
    id: 3,
    element: <ContactUsPage />,
    title: 'Contact us',
    path: '/contact',
    private: false,
    hidden: false,
    location: 'right'
  },
  {
    id: 4,
    element: <ChatPage />,
    title: 'Chat',
    path: '/chat',
    private: false,
    hidden: true,
  },
];

export default navbar;