import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Icon from '../../../../assets/svg';
import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api'
import * as UI from './style';
interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

function NextArrow({ onClick }: NextArrowProps) {
    return <UI.StyledNextArrow onClick={onClick}>
        <Icon.NextArrow />
    </UI.StyledNextArrow>;
}
function PrevArrow({ onClick }: NextArrowProps) {
    return <UI.StyledPrevArrow onClick={onClick}>
        <Icon.PrevArrow />
    </UI.StyledPrevArrow>;
}

const SliderImg = () => {
    const [images, setImages] = useState<any[]>([])

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];
            API.get(`/api/restaurantImages/${REGNumber}`).then((res) => {
                let imgs:any[] = []
                for(let i = 0; i < res.length; i++) {
                    imgs.push(res[i].image)
                }
                setImages(imgs)
              })
        }, []
    )

	//옵션
	const setting = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
	}
	
	return (
		<UI.StyledCarousel className="carouse1">
			<Slider { ...setting }>
                {images.map((item) => (
                <UI.StyledImg src={item} />
            ))}
			</Slider>
		</UI.StyledCarousel>
	);
}

export default SliderImg;