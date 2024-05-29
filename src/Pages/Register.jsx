import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const { createUser,user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname||'/'
  const [passMatch, setPassMatch] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      setPassMatch(false);
    } else {
      setPassMatch(true);
      await createUser(email,password)
    }

  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              {!passMatch && (
                <p className="text-[#ff1515]">password do not match</p>
              )}

              <div className="form-control">
                <button className="btn btn-primary ">Register</button>
              </div>
            </form>
            <div className="ms-7 me-7 mb-5">
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Register With Google
                </button>
              </div>
              <label className="label ">
                <a>
                  Already registered?{" "}
                  <Link to="/login" className="font-bold">
                    login
                  </Link>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
