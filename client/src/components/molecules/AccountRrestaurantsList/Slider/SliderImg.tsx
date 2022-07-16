import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Icon from '../../../../assets/svg';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api'

const StyledImg = styled.img`
    padding: 0 20px 20px;
`
const StyledCarousel = styled.div`
    position: relative;
    padding: 40px 20px 0;
`
const StyledNextArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translate(0, -50%);
    cursor: pointer;
    z-index: 10;
    opacity: 50%;
    transition: 200ms ease-in-out;

    &:hover {
        opacity: 100%;
    }
`
const StyledPrevArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(0, -50%);
    cursor: pointer;
    z-index: 10;
    opacity: 50%;
    transition: 200ms ease-in-out;

    &:hover {
        opacity: 100%;
    }
`

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

function NextArrow({ onClick }: NextArrowProps) {
    return <StyledNextArrow onClick={onClick}>
        <Icon.NextArrow />
    </StyledNextArrow>;
}
function PrevArrow({ onClick }: NextArrowProps) {
    return <StyledPrevArrow onClick={onClick}>
        <Icon.PrevArrow />
    </StyledPrevArrow>;
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
		<StyledCarousel className="carouse1">
			<Slider { ...setting }>
                {images.map((item) => (
                <StyledImg src={item} />
            ))}
			</Slider>
		</StyledCarousel>
	);
}

export default SliderImg;