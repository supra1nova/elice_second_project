import { createGlobalStyle } from 'styled-components';

// url(${require('./NotoSansKR-Black.woff')})
// url(${require('./NotoSansKR-Black.woff2')})
// url(${require('./NotoSansKR-Bold.otf')})
// url(${require('./NotoSansKR-Bold.woff')})
// url(${require('./NotoSansKR-Bold.woff2')})
// url(${require('./NotoSansKR-DemiLight.otf')})
// url(${require('./NotoSansKR-DemiLight.woff')})
// url(${require('./NotoSansKR-DemiLight.woff2')})
// url(${require('./NotoSansKR-Light.otf')})
// url(${require('./NotoSansKR-Light.woff')})
// url(${require('./NotoSansKR-Light.woff2')})
// url(${require('./NotoSansKR-Medium.otf')})
// url(${require('./NotoSansKR-Medium.woff')})
// url(${require('./NotoSansKR-Medium.woff2')})
// url(${require('./NotoSansKR-Regular.otf')})
// url(${require('./NotoSansKR-Regular.woff')})
// url(${require('./NotoSansKR-Regular.woff2')})
// url(${require('./NotoSansKR-Thin.otf')})
// url(${require('./NotoSansKR-Thin.woff')})
// url(${require('./NotoSansKR-Thin.woff2')})

export default createGlobalStyle`
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${require('./NotoSansKR-Black.woff2')}) format('woff2')
		url(${require('./NotoSansKR-Black.otf')}) format('woff')
		url(${require('./NotoSansKR-Black.otf')}) format('opentype');
		font-weight: 900;
		font-style: normal;
	}
`;
