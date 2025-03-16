import { http, HttpResponse } from 'msw';
import mockData from './mockData.json';

interface LoginRequestBody {
  email: string;
  password: string;
}

interface RegisterRequestBody {
  email: string;
  password: string;
  age: number;
}

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const body = (await request.json()) as LoginRequestBody;

    const user = mockData.users.find(
      (u) => u.email === body.email && u.password === body.password
    );

    if (user) {
      return HttpResponse.json(
        {
          message: 'Login successful',
          MockToken: body.email,
          email: body.email,
        },
        { status: 200 }
      );
    }

    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }),

  http.post('/api/register', async ({ request }) => {
    const body = (await request.json()) as RegisterRequestBody;

    const existingUser = mockData.users.find((u) => u.email === body.email);

    if (existingUser) {
      return HttpResponse.json(
        { message: 'Email already in use' },
        { status: 400 }
      );
    }

    return HttpResponse.json(
      {
        message: 'Registration successful',
        MockToken: body.email,
        email: body.email,
      },
      { status: 201 }
    );
  }),

  http.post('/api/logout', async () => {
    return HttpResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );
  }),
];
