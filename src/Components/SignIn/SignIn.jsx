

const SignIn = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign In</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  
                  className="input w-[409px] h-[46px] input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  
                  className="input  w-[409px] h-[46px] input-bordered"
                />
              </div>
              <div className="w-[87px] h-[38px] mx-auto form-control mt-6">
                <input
                  className="btn bg-[#F2921D] border-none px-6 btn-warning"
                  type="submit"
                  value="Sign In"
                />
              </div>
              
            </form>
            <div className="flex mt-8 mb-32">
                <p>Forgot Password?</p>
                <p>Create an account</p>
              </div>
          </div>
          <hr className="w-[214px] h-1 bg-gray-100 border-0 mb-4 rounded mt-4 mx-auto dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
