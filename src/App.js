import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Privacy from './Pages/Privacy/Privacy';
import About from './Pages/About/About';
import Courses from './Pages/Courses/Courses';
import ThankPage from './Pages/ThankYouPage/ThankPage';

import ProfilePage from './Pages/Profile/ProfilePage';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import CreateProfile from './Pages/CreateProfile/CreateProfile';
import Home from './Pages/Home/Home';
import Certificate from './Pages/Certificate/Certificate';
import CourseDeatil from './Pages/CourseDetail/CourseDetail';
import CourseUnit from './Pages/CourseUnit/CourseUnit';
import ReviewsPage from './Components/Review/ReviewsPage';
import AddReview from './Components/AddReview/AddReview';
import Chart from './Pages/Chart/Chart';
import CircleProgress from './Pages/CircleProgress/CircleProgress';
import NewCertificate from './Pages/NewCertificate/NewCertificate';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import ForgotPasword from './Pages/ForgotPassword/ForgotPasword';
import ResetPassword from './Pages/ForgotPassword/ResetPassword';




const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Header and Footer on Signup and Signin pages
  const hideNavbarFooter = ["/signup", "/signin", "/newCertificate", "/addReview", "/chart", "/progress", "/userDashboard", "/forgot", "/reset"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPasword/>} />
            <Route path="/reset" element={<ResetPassword/>} />
            <Route path="/thank" element={<ThankPage />} />
            <Route path="/review" element={<ReviewsPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/courseDetail" element={<CourseDeatil />} />
            <Route path="/courseUnit" element={<CourseUnit />} />
            <Route path="/addReview" element={<AddReview />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/newCertificate" element={<NewCertificate />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/progress" element={<CircleProgress percentage={75} />} />

          </Routes>
        </Layout>


      </Router>
    </div>
  );
}

export default App;
