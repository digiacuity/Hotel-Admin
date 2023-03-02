import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Booking from "./Components/FrontDesk/Booking/Booking";
import Manageroooms from "./Components/FrontDesk/ManageRooms/Manageroooms";
import Addrooms from "./Components/FrontDesk/RoomList/Addrooms";
import Staff from "./Components/Staff/Staff";
import Maintenance from "./Components/Mainatanence/Maintenance";
import AddStaff from "./Components/Staff/AddStaff";
import RoomList from "./Components/FrontDesk/RoomList/RoomList";
import Profile from "./Pages/Profile";
import { UserProvider } from "./Context";
import { useState } from "react";
import Search from "./Components/Search/Search";
import Available from "./Components/Search/Available";
import Bookinglist from "./Components/FrontDesk/BookingList/Bookinglist";
import DaySettle from "./Components/Reports/DaySettle/DaySettle";
import Balance from "./Components/Reports/Balance/Balance";
import Occupancy from "./Components/Reports/Occupancy/Occupancy";
import Vacant from "./Components/Reports/Vaccunt/Vacant";
import ReserveList from "./Components/FrontDesk/ReserveList/ReserveList";
import MoreReport from "./Components/Reports/MoreReport/MoreReport";
import TableModel from "./Components/Reports/DaySettle/TableModel";
import CheckinRep from "./Components/Reports/MoreReport/Checkin/CheckinRep";
import CheckoutRep from "./Components/Reports/MoreReport/Checkout/CheckoutRep";
import OnlineBookinglist from "./Components/FrontDesk/BookingList/OnlineBookinglist";
import FrontDesk from "./Components/FrontDesk/FrontDesk";
import Restaurent from "./Components/Restaturent/Restaurent";
import Checkin from "./Components/FrontDesk/Checkin/Checkin";

// function ProtectedRoute({ children }) {
//   if (localStorage.getItem("myapptoken")) {
//     return children;
//   } else {
//     return <Navigate to="/" />;
//   }
// }
function App() {
  const [roomStatus, setRoomStatus] = useState(false);
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(false);
  const [booking, setBooking] = useState(false);

  return (
    <>
      <BrowserRouter>
        <UserProvider
          value={{
            roomStatus,
            setRoomStatus,
            loading,
            setloading,
            user,
            setUser,
            booking,
            setBooking,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/frontdesk">
              <Route path="" element={<FrontDesk />} />
              <Route path="booking" element={<Search />} />
              <Route path="booking/:id" element={<Booking />} />
              <Route path="checkin/:id" element={<Checkin />} />
              <Route path="reservelist" element={<ReserveList />} />
              <Route path="checkedin" element={<Bookinglist />} />
              <Route path="checkoutlist" element={<CheckoutRep />} />
              {/* <Route path="onlinebookinglist" element={<OnlineBookinglist />} /> */}
              <Route path="roomlist" element={<RoomList />} />
              <Route path="managerooms" element={<RoomList />} />
            </Route>
            <Route path="/availablerooms" element={<Available />} />

            <Route path="/addrooms" element={<Addrooms />} />
            <Route path="/restaurant" element={<Restaurent />} />

            <Route path="/staff" element={<Staff />} />

            <Route path="/addstaff" element={<AddStaff />} />

            <Route path="/maintenance" element={<Maintenance />} />

            <Route path="/report">
              <Route path="" element={<MoreReport />} />
              <Route path="daysettle" element={<DaySettle />} />
              <Route path="vacant" element={<Vacant />} />
              <Route path="balance" element={<Balance />} />
              <Route path="occupancy" element={<Occupancy />} />
              <Route path="more">
                <Route path="" element={<MoreReport />} />
                <Route path="checkin" element={<CheckinRep />} />
                <Route path="checkout" element={<CheckoutRep />} />
              </Route>
            </Route>
            <Route path="*" element={<Login />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
