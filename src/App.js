import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { 
  Landing, 
  SignIn, 
  SignUp, 
  Home, 
  DashBoard, 
  Users,
  Courses,
  PaidUsers,
  Admins,
  Contacts,
  Terms,
  Privacy,
  Cancellation,
  Refund,
  Billing,
  TermsPolicy,
  PrivacyPolicy,
  CancelPolicy,
  RefundPolicy,
  BillingPolicy,
  Error,
  Pending

} from './pages/index.js';


function App() {

  return (
    <Router>
      <div>
        <ToastContainer
          limit={3}
          progressClassName={sessionStorage.getItem('darkMode') === 'true' ? "toastProgressDark" : "toastProgress"}
          bodyClassName={sessionStorage.getItem('darkMode') === 'true' ? "toastBodyDark" : "toastBody"}
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={sessionStorage.getItem('darkMode') === 'true' ? 'dark' : 'light'}
        />
        <Routes>
          {/* Main App */}
          <Route path="/" exact element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/topics' element={<Topics />} />
          <Route path='/course' element={<Course />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<About />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/success' element={<Success />} />
          <Route path='/subscription' element={<Manage />} />
          <Route path='/successful' element={<Successful />} />
          <Route path='/failed' element={<Failed />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<TermsPolicy />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/cancellation' element={<CancelPolicy />} />
          <Route path='/refund' element={<RefundPolicy />} />
          <Route path='/billing' element={<BillingPolicy />} />
          <Route path='/pending' element={<Pending />} />
          {/* Admin Panel */}
          <Route path='/dashBoard' element={<DashBoard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/paid' element={<PaidUsers />} />
          <Route path='/admins' element={<Admins />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/editterms' element={<Terms />} />
          <Route path='/editprivacy' element={<Privacy />} />
          <Route path='/editcancellation' element={<Cancellation />} />
          <Route path='/editrefund' element={<Refund />} />
          <Route path='/editbilling' element={<Billing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
