import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import Image from '../Image';
import { Close } from '../../../assets/svg';
import * as UI from './style';
interface Props {
  id: string;
  htmlFor: string;
  type: string;
  name: string;
  accept: string;
}

const InputFileThumbnail = ({ id, type, name, accept, htmlFor }: Props) => {
  const [fileImage, setFileImage] = useState('');
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  return (
    <UI.Container>
      <UI.File>
        <UI.Label htmlFor={htmlFor}></UI.Label>
        <UI.Input
          type={type}
          id={id}
          onChange={saveFileImage}
          name={name}
          accept={accept}
        />
      </UI.File>
      {fileImage ? (
        <UI.Preview>
          <UI.Image>
            <Image image={fileImage} />
          </UI.Image>
          <UI.Delete>
            <ButtonIcon onClick={deleteFileImage}>
              <Close fill='#fff' />
            </ButtonIcon>
          </UI.Delete>
        </UI.Preview>
      ) : null}
    </UI.Container>
  );
};

InputFileThumbnail.defaultProps = {
  type: 'file',
};

export default InputFileThumbnail;
