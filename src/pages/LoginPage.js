import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { loginpage } from "../images/images";


function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(login({ name: "" }));
    navigate("/products");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow text-center" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px" }}>
        <img src={loginpage} alt="login"className="img-fluid mb-3" style={{ maxHeight: "180px", objectFit: "cover", borderRadius:"5px"}}/>
        <h3 className="mb-3">Welcome Back !</h3>
        <p className="text-muted small">Login to continue shopping with <b>M-Cart</b></p>
        <button className="btn w-100 mb-3 login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;

