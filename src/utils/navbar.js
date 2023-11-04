import useUniqueId from "../hooks";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactUsPage from "../pages/ContactUs";
import ChatPage from "../pages/Chat";

const navbar = [
  {
    id: useUniqueId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
    location: 'left'
  },
  {
    id: useUniqueId,
    element: <AboutPage />,
    title: 'About',
    path: '/about',
    private: false,
    hidden: false,
    location: 'left'
  },
  {
    id: useUniqueId,
    element: <ContactUsPage />,
    title: 'Contact us',
    path: '/contact',
    private: false,
    hidden: false,
    location: 'right'
  },
  {
    id: useUniqueId,
    element: <ChatPage />,
    title: 'Chat',
    path: '/chat',
    private: false,
    hidden: true,
  },
];

export default navbar;