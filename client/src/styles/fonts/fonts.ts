import { createGlobalStyle } from 'styled-components';
import NotoSansKRBlacWoff from './NotoSansKR-Black.woff';
import NotoSansKRBlackWoff2 from './NotoSansKR-Black.woff2';
import NotoSansKRBlackOft from './NotoSansKR-Black.otf';
import NotoSansKRBoldWoff from './NotoSansKR-Bold.woff';
import NotoSansKRBoldWoff2 from './NotoSansKR-Bold.woff2';
import NotoSansKRBoldOtf from './NotoSansKR-Bold.otf';
import NotoSansKRDemiLightWoff from './NotoSansKR-DemiLight.woff';
import NotoSansKRDemiLightWoff2 from './NotoSansKR-DemiLight.woff2';
import NotoSansKRDemiLightOtf from './NotoSansKR-DemiLight.otf';
import NotoSansKRLightWoff from './NotoSansKR-Light.woff';
import NotoSansKRLightWoff2 from './NotoSansKR-Light.woff2';
import NotoSansKRLightOtf from './NotoSansKR-Light.otf';
import NotoSansKRMediumWoff from './NotoSansKR-Medium.woff';
import NotoSansKRMediumWoff2 from './NotoSansKR-Medium.woff2';
import NotoSansKRMediumOtf from './NotoSansKR-Medium.otf';
import NotoSansKRRegularWoff from './NotoSansKR-Regular.woff';
import NotoSansKRRegularWoff2 from './NotoSansKR-Regular.woff2';
import NotoSansKRRegularOtf from './NotoSansKR-Regular.otf';
import NotoSansKRThinWoff from './NotoSansKR-Thin.woff';
import NotoSansKRThinWoff2 from './NotoSansKR-Thin.woff2';
import NotoSansKRThinOtf from './NotoSansKR-Thin.otf';

export default createGlobalStyle`
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRBlackWoff2}) format('woff2'),
		url(${NotoSansKRBlacWoff}) format('woff'),
		url(${NotoSansKRBlackOft}) format('opentype');
		font-weight: 900;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRBoldWoff2}) format('woff2'),
		url(${NotoSansKRBoldWoff}) format('woff'),
		url(${NotoSansKRBoldOtf}) format('opentype');
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRMediumWoff2}) format('woff2'),
		url(${NotoSansKRMediumWoff}) format('woff'),
		url(${NotoSansKRMediumOtf}) format('opentype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRRegularWoff2}) format('woff2'),
		url(${NotoSansKRRegularWoff}) format('woff'),
		url(${NotoSansKRRegularOtf}) format('opentype');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRDemiLightWoff2}) format('woff2'),
		url(${NotoSansKRDemiLightWoff}) format('woff'),
		url(${NotoSansKRDemiLightOtf}) format('opentype');
		font-weight: 350;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRLightWoff2}) format('woff2'),
		url(${NotoSansKRLightWoff}) format('woff'),
		url(${NotoSansKRLightOtf}) format('opentype');
		font-weight: 350;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRThinWoff2}) format('woff2'),
		url(${NotoSansKRThinWoff}) format('woff'),
		url(${NotoSansKRThinOtf}) format('opentype');
		font-weight: 100;
		font-style: normal;
	}
`;
