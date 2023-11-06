import img from '../../assets/images/avatar1.png';

export const InitialValue = { link: img, name: "Username" };

export const reducer = (state, { link, name }) => (link && name) ? { link, name } : state;