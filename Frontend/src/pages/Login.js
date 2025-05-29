import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const authCheck = () => {
    setTimeout(() => {
      fetch("http://localhost:4000/api/login")
        .then((response) => response.json())
        .then((data) => {
          alert("Login realizado com sucesso");
          localStorage.setItem("user", JSON.stringify(data));
          authContext.signin(data._id, () => {
            navigate("/");
          });
        })
        .catch((err) => {
          alert("Credenciais incorretas, tente novamente");
          console.log(err);
        });
    }, 3000);
  };

  const loginUser = (e) => {
    if (form.email === "" || form.password === "") {
      alert("Para fazer login, preencha todos os campos...");
    } else {
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((result) => {
          console.log("Usuário logado", result);
        })
        .catch((error) => {
          console.log("Algo deu errado ", error);
        });
    }
    authCheck();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center">
        <div className="flex justify-center">
          <img src={require("../assets/signup.jpg")} alt="Imagem de login" />
        </div>
        <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={require("../assets/logo.png")}
              alt="Logo da empresa"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Acesse sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {" "}
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                
              </span>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Endereço de email"
                  value={form.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Senha"
                  value={form.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembrar de mim
                </label>
              </div>

              <div className="text-sm">
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  Esqueceu sua senha?
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={loginUser}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Entrar
              </button>
              <p className="mt-2 text-center text-sm text-gray-600">
                Não tem uma conta?{" "}
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  <Link to="/register"> Cadastre-se agora </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;