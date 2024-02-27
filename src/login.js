


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from './api';

function Login() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const user = await loginUser(data.username, data.password);
    if (user) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card border-primary">
            <div className="card-body">
              <h2 className="card-title text-primary text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <div className="form-group">
                  <input
                    {...register('username', { required: true })}
                    placeholder="Username"
                    className={`form-control ${message.includes('Invalid') ? 'is-invalid' : ''}`}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    {...register('password', { required: true })}
                    placeholder="Password"
                    className={`form-control ${message.includes('Invalid') ? 'is-invalid' : ''}`}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              {message && (
                <div className={`alert mt-3 ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`} role="alert">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;





