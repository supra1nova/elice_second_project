import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PopupContainer from '../../../oranisms/Popup/PopupContainer';
import PopupHeader from '../../../oranisms/Popup/PopupHeader';
import PopupContents from '../../../oranisms/Popup/PopupContents';
import PopupFooter from '../../../oranisms/Popup/PopupFooter';
import { POPUP } from '../../../../constants/title';
import * as UI from './style';
import './App.css';
import * as API from '../../../../api/api';
import Button from '../../../atoms/Button';
import "react-datepicker/dist/react-datepicker.css";
import InputFileButton from '../../../../components/atoms/InputFileButton';
import FileTumbnail from '../../../../components/atoms/FileTumbnail';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
  width: string;
  titleColor: boolean;
  title: string;
  REGNumber: number;
  email: string;
  reserveId: number;
}

const PopupReserve = ({ open, onClose, width, titleColor, title, REGNumber, reserveId, email }: Props) => {
  const navigate = useNavigate();

  const [reviewValue, setReviewValues] = useState<any>('');
  const [rating, setRating] = useState<any>(5);
  const [image, setImage] = useState<any>({
    image_file: [],
    preview_URL: [],
  });

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  const saveFileImage = (e: any) => {
    e.preventDefault();

    const imageLists = e.target.files; // 파일 객체 불러옴

    let imageUrlLists = [...image.preview_URL];
    let imageFileLists = [...image.image_file];

    for (let i = 0; i < imageLists.length; i++) {
      URL.revokeObjectURL(imageLists[i]);
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      const currentImageFile = e.target.files[i];
      imageUrlLists.push(currentImageUrl);
      imageFileLists.push(currentImageFile);
    }

    if (imageUrlLists.length > 6) {
      imageUrlLists = imageUrlLists.slice(0, 6);
      imageFileLists = imageFileLists.slice(0, 6);
    }

    setImage({ image_file: imageFileLists, preview_URL: imageUrlLists });
  };

  const deleteFileImage = (id: any) => {
    URL.revokeObjectURL(image.preview_URL);
    const deleteImage = image.preview_URL.filter(
      (item: any, index: any) => index !== id,
    );
    setImage({ image_file: deleteImage, preview_URL: deleteImage });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = {
        comment: reviewValue,
        email: email,
        rating: rating,
        REGNumber: REGNumber,
        image: [],
      };
      console.log(data)
      await API.post('/api/reviews/user', '', data);

      if (image.image_file) {
        const formData:any = new FormData();
        for (let i = 0; i < image.image_file.length; i++) {
          formData.append('image', image.image_file[i]);
          console.log(image.image_file[i])
        }
        formData.append('reserveId', reserveId);
        console.log(reserveId)
        await API.filePost('/api/reviewImages', '', formData);
      }
      alert('리뷰가 등록되었습니다.')
      navigate(`/restaurants/view/${REGNumber}`);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <PopupContainer open={open} width={width} paddingBottom={'20'}>
      <PopupHeader title={title} onClose={onClose} titleColor={titleColor} />

      <UI.FormContainer onSubmit={handleSubmit}>

        <label>
          <select name="rating" onChange={e => setRating(e.target.value)}>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>
        <label>
            <UI.FormName>리뷰</UI.FormName>
            <UI.StyledTextarea 
              name="comment" 
              onChange={e => setReviewValues(e.target.value)}
              placeholder='*허위 및 과장, 저작물 무단 도용, 명예훼손, 초상권 및 사생활 침해, 욕설, 타인비방 등이 포함된 경우에는 게시가 제한될 수 있습니다.' 
              rows={5}
            ></UI.StyledTextarea>
            <UI.Info>최대 1,000자</UI.Info>
        </label>

        <label>
            <UI.FormName>사진을 올려주세요(선택)</UI.FormName>
            <UI.StyleInputFileImage>
              <InputFileButton
                  id='inputFileAvatarImage'
                  htmlFor='inputFileAvatarImage'
                  name='inputFileAvatarImage'
                  accept='image/*'
                  onChange={saveFileImage}
                  multiple
                />
              </UI.StyleInputFileImage>
              {image.preview_URL ? (
                <UI.StyleInputFilePreview>
                  {image.preview_URL.map((image: any, id: any) => {
                    return (
                      <FileTumbnail
                        image={image}
                        key={id}
                        onClick={() => {
                          deleteFileImage(id);
                        }}
                      />
                    );
                  })}
                </UI.StyleInputFilePreview>
              ) : null}
        </label>

        <Button component={'primary'} size={'small'} block>
          리뷰 등록하기
        </Button>
      </UI.FormContainer>
    </PopupContainer>
  );
};

export default PopupReserve;
