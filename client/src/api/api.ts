import axios from 'axios';

const VMUrl = 'http://localhost:3000';

const get = async (
  endpoint: String,
  params: String | null = '',
): Promise<any> => {
  const apiUrl = `${VMUrl}${endpoint}/${params}`;
  const res = await axios.get(apiUrl);
  return res.data;
};

const userGet = async (
  endpoint: String,
  params: String | null = '',
): Promise<any> => {
  try {
    const apiUrl = `${VMUrl}${endpoint}/${params}`;
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
  const apiUrl = `${VMUrl}${endpoint}/${params}`;
  const res = await axios.post(apiUrl, data);
  return res;
};

const tokenPost = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  const apiUrl = `${VMUrl}${endpoint}/${params}`;
  const res = await axios.post(apiUrl, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res;
};

const filePost = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  try {
    const apiUrl = `${VMUrl}${endpoint}/${params}`;
    const res = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err: any) {
    if (err.response) {
      console.log(err.response.data);
    }
  }
};

const patch = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  try {
    const apiUrl = `${VMUrl}${endpoint}/${params}`;
    const res = await axios.patch(apiUrl, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err: any) {
    if (err.response) {
      console.log(err.response.data);
    }
  }
};

const file = async (
  endpoint: String,
  params: String | null = '',
  data: object,
): Promise<any> => {
  try {
    const apiUrl = `${VMUrl}${endpoint}/${params}`;
    const res = await axios.patch(apiUrl, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err: any) {
    if (err.response) {
      console.log(err.response.data);
    }
  }
};

// del 은 delete로 export 했으니 API.delete 로 사용

export const del = async (
  endpoint: String,
  params: String | null = '',
  data: object | null = {},
): Promise<any> => {
  try {
    const apiUrl = `${VMUrl}${endpoint}/${params}`;
    const res = await axios.delete(apiUrl, {
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err: any) {
    console.error(err);
  }
};

export { get, userGet, tokenPost, post, file, filePost, patch, del as delete };
