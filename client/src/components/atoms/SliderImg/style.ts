import styled from 'styled-components';

export const StyledImg = styled.img`
    padding: 0 20px 20px;
    width: 272px;
    height: 272px;
    object-fit: cover;
`
export const StyledCarousel = styled.div`
    position: relative;
    padding: 40px 20px 0;
`
export const StyledNextArrow = styled.div`
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
export const StyledPrevArrow = styled.div`
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