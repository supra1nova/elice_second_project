import ReactDom from 'react-dom';
import PopupContainer from '../../../../components/oranisms/Popup/PopupContainer';
import PopupHeader from '../../../../components/oranisms/Popup/PopupHeader';
import PopupContents from '../../../../components/oranisms/Popup/PopupContents';
import PopupFooter from '../../../../components/oranisms/Popup/PopupFooter';

interface Props {
  open: boolean;
  children: any;
}

const PostCodePopup = ({ open, children }: Props) => {
  return (
    <PopupContainer open={open}>
      <PopupContents>{children}</PopupContents>
    </PopupContainer>
  );
};

export default PostCodePopup;
