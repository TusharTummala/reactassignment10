
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from './api';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const newUser = await registerUser(data.username, data.password);
    if (newUser) {
      setMessage('User registered successfully');
    } else {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card border-primary">
            <div className="card-body">
              <h2 className="card-title text-primary text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <div className="form-group">
                  <input
                    {...register('username', { required: true })}
                    placeholder="Username"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    style={{ borderColor: errors.username ? '#FF0000' : '#CED4DA' }}
                  />
                  {errors.username && <div className="invalid-feedback">Username is required</div>}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    {...register('password', { required: true, minLength: 10 })}
                    placeholder="Password (min. 10 characters)"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    style={{ borderColor: errors.password ? '#FF0000' : '#CED4DA' }}
                  />
                  {errors.password && <div className="invalid-feedback">Password is required and must be at least 10 characters long</div>}
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: '#FF9900', borderColor: '#FF9900' }}>Register</button>
              </form>
              {message && (
                <div className={`alert mt-3 ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
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
export default Register;

