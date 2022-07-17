import axios from 'axios';

// import * as API from '~~~ /api/api' ;
// 위와 같이 import 하고 사용
// url 맨앞의 /api도 공용으로 줄 수 있긴 한데 복붙하기 불편하실까봐 그냥 두겠습니다.
// 혹시 붙이고 싶으시면 전역변수 만드시고 말씀해주세요. 아니면 요청해주세요

/*

useEfeect(() => {
    API.get('/api/users').then((res) => setData(res));
})

*/

const get = async (
  endpoint: String,
  params: String | null = '',
): Promise<any> => {
  const apiUrl = `${endpoint}/${params}`;
  const res = await axios.get(apiUrl);
  return res.data;
};

const userGet = async (
  endpoint: String,
  params: String | null = '',
): Promise<any> => {
  try {
    const apiUrl = `${endpoint}/${params}`;
    const token = localStorage.getItem('token');
    const res = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res) {
      throw new Error('ERROR');
    }

    return res.data;
  } catch (err: any) {
    console.error(err);
  }
};

/*
const postData = {
  email: 'dcTest',
  name: 'ddd',
  password: 'asdf',
  nickName: 'nick',
  phoneNumber: '12345678',
  role: 'ADMIN',
};

useEffect(() => {
    API.post('/api/users/register','',postData)
})

*/

const post = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  const apiUrl = `${endpoint}/${params}`;
  const res = await axios.post(apiUrl, data);
  return res;
};

const patch = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  try {
    const apiUrl = `${endpoint}/${params}`;
    const res = await axios.patch(apiUrl, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err: any) {
    console.error(err);
  }
};

// del 은 delete로 export 했으니 API.delete 로 사용

export const del = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  const apiUrl = `${endpoint}/${params}`;
  const res = await axios.delete(apiUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  console.log(res);
  return res;
};

export { get, userGet, post, patch, del as delete };
