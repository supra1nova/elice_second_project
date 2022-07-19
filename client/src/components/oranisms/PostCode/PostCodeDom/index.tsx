import ReactDom from 'react-dom';

interface Props {
  children: any;
}

const PostCodeDom = ({ children }: Props) => {
  const el = document.getElementById('popupDom') as HTMLElement;
  return ReactDom.createPortal(children, el);
};

export default PostCodeDom;
