import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { isLoading } from "./redux/Slices/loadingSlice.js";
import { getProducts } from "./redux/Slices/productSlice.js";
import { setToken, userLogin } from "./redux/Slices/userSlice.js";

function App() {
  const isLoadingState = useSelector((state) => state.loadingData.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  // const token = useSelector((state) => state.user.token) || localStorage.getItem('token');
  const user = useSelector(state => state.user)
  const token = dispatch(setToken(user.token))
  // console.log(token);
  // console.log(user.email);

  // useLayoutEffect(()=>{
  //   dispatch(getProducts())
  // },[])

  useEffect(() => {
    // console.log("user availble",token)
    if (token) {
      (
        async () => {
          const userDetailsFetch = await fetch(
            `http://localhost:7000/api/user/userDetails`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
                Authorization: `JWT ${token.payload}`
              },
            }
          )
          const userDetails = await userDetailsFetch.json()
          if (userDetails.alert == "success") {
            dispatch(userLogin(userDetails.data))
          }
        }
      )();
    }
  }, [token])

  return (
    <>
      <div className="min-w-[280px]">
        <Header />
        <main className="min-h-[calc(100vh-56px)] h-full   bg-slate-50 pt-16 ">
          <div className="max-w-[1500px] m-auto ">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>

      <>
        {/* loading  */}
        {isLoadingState && <Loading />}
      </>
    </>
  );
}

export default App;