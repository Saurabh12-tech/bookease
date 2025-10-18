import React, { useState } from 'react';
import { Calendar, Clock, CreditCard, CheckCircle, Home, User, Mail, Phone, ArrowRight } from 'lucide-react';

function BookingApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    service: ''
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const [paymentDetails, setPaymentDetails] = useState(null);

  const services = [
    { id: 1, name: 'Consultation', duration: '30 min', price: 4000 },
    { id: 2, name: 'Therapy Session', duration: '60 min', price: 8000 },
    { id: 3, name: 'Workshop', duration: '90 min', price: 12000 }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const isBookingValid = () => {
    return bookingData.name.trim() !== '' && 
           bookingData.email.trim() !== '' && 
           bookingData.phone.trim() !== '' && 
           bookingData.date !== '' && 
           bookingData.timeSlot !== '' && 
           bookingData.service !== '';
  };

  const isPaymentValid = () => {
    return paymentData.cardNumber.trim() !== '' &&
           paymentData.cardName.trim() !== '' &&
           paymentData.expiry.trim() !== '' &&
           paymentData.cvv.trim() !== '';
  };

  const handleBookingSubmit = () => {
    if (isBookingValid()) {
      setCurrentPage('payment');
    }
  };

  const handlePaymentSubmit = () => {
    if (isPaymentValid()) {
      const payment = {
        bookingId: 'BK' + Math.floor(Math.random() * 100000),
        transactionId: 'TXN' + Math.floor(Math.random() * 1000000),
        amount: services.find(s => s.name === bookingData.service)?.price || 0,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        status: 'Confirmed'
      };
      setPaymentDetails(payment);
      setCurrentPage('confirmation');
    }
  };

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl">
                  <Calendar className="text-white" size={28} />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">BookEase</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                Book Your Perfect Time
              </span>
            </div>
            <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Appointment Booking
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule appointments, manage bookings, and pay securely with our modern booking platform
            </p>
            <button
              onClick={() => setCurrentPage('booking')}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center"
            >
              Book Appointment Now
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Calendar className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Easy Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">Choose your preferred date and time slot with our intuitive booking system</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CreditCard className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">Pay safely with our encrypted payment gateway and multiple payment options</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-pink-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Instant Confirmation</h3>
              <p className="text-gray-600 leading-relaxed">Receive immediate booking confirmation and payment receipt via email</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'booking') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8 font-semibold group"
          >
            <Home size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-indigo-100">
            <div className="mb-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                Book Your Appointment
              </h2>
              <p className="text-gray-600">Fill in your details to schedule your appointment</p>
            </div>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    <User size={18} className="inline mr-2 text-indigo-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    <Mail size={18} className="inline mr-2 text-indigo-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  <Phone size={18} className="inline mr-2 text-indigo-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (val.length <= 10) {
                      setBookingData({...bookingData, phone: val});
                    }
                  }}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                  placeholder="9876543210"
                  maxLength="10"
                />
                <p className="text-sm text-gray-500 mt-2">Enter 10 digit mobile number</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-4">
                  Select Service
                </label>
                <div className="grid md:grid-cols-3 gap-5">
                  {services.map(service => (
                    <div
                      key={service.id}
                      onClick={() => setBookingData({...bookingData, service: service.name})}
                      className={`p-6 border-3 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        bookingData.service === service.name
                          ? 'border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg'
                          : 'border-gray-200 hover:border-indigo-300 hover:shadow-md bg-white'
                      }`}
                    >
                      <h4 className="font-bold text-gray-800 text-lg mb-1">{service.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{service.duration}</p>
                      <p className="text-2xl font-bold text-indigo-600">₹{service.price.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  <Calendar size={18} className="inline mr-2 text-indigo-600" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-4">
                  <Clock size={18} className="inline mr-2 text-indigo-600" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setBookingData({...bookingData, timeSlot: slot})}
                      className={`py-4 px-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        bookingData.timeSlot === slot
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleBookingSubmit}
                disabled={!isBookingValid()}
                className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center ${
                  isBookingValid()
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl transform hover:scale-105 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Proceed to Payment
                <ArrowRight className="ml-3" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'payment') {
    const selectedService = services.find(s => s.name === bookingData.service);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => setCurrentPage('booking')}
            className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8 font-semibold group"
          >
            <Home size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Booking
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-3xl shadow-2xl p-10 border border-indigo-100">
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  Payment Details
                </h2>
                <p className="text-gray-600">Enter your payment information securely</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardName}
                    onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-3">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={paymentData.expiry}
                      onChange={(e) => setPaymentData({...paymentData, expiry: e.target.value})}
                      placeholder="MM/YY"
                      maxLength="5"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-3">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                      placeholder="123"
                      maxLength="3"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all outline-none text-gray-800 font-medium"
                    />
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 p-5 rounded-xl">
                  <div className="flex items-center space-x-3 text-sm text-green-800 font-semibold">
                    <CheckCircle size={20} className="text-green-600" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>

                <button
                  onClick={handlePaymentSubmit}
                  disabled={!isPaymentValid()}
                  className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center ${
                    isPaymentValid()
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl transform hover:scale-105 cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Complete Payment
                  <CheckCircle className="ml-3" size={20} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Summary</h3>
              
              <div className="space-y-5 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 font-semibold">Service</p>
                  <p className="font-bold text-gray-800 text-lg">{bookingData.service}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 font-semibold">Date</p>
                  <p className="font-bold text-gray-800">{bookingData.date}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 font-semibold">Time</p>
                  <p className="font-bold text-gray-800">{bookingData.timeSlot}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 font-semibold">Duration</p>
                  <p className="font-bold text-gray-800">{selectedService?.duration}</p>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 font-semibold">Subtotal</span>
                  <span className="font-bold text-gray-800">₹{selectedService?.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <span className="text-gray-600 font-semibold">Tax</span>
                  <span className="font-bold text-gray-800">₹0</span>
                </div>
                <div className="flex justify-between items-center text-2xl font-bold bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                  <span className="text-gray-800">Total</span>
                  <span className="text-indigo-600">₹{selectedService?.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'confirmation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-100">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle className="text-white" size={56} />
            </div>
            
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-gray-600 mb-10">Your appointment has been successfully booked and payment processed.</p>

            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 mb-10 text-left border-2 border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Booking Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Booking ID</p>
                  <p className="font-bold text-gray-800 text-lg">{paymentDetails?.bookingId}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Transaction ID</p>
                  <p className="font-bold text-gray-800 text-lg">{paymentDetails?.transactionId}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Service</p>
                  <p className="font-bold text-gray-800 text-lg">{bookingData.service}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Amount Paid</p>
                  <p className="font-bold text-indigo-600 text-lg">₹{paymentDetails?.amount.toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Appointment Date</p>
                  <p className="font-bold text-gray-800 text-lg">{bookingData.date}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Appointment Time</p>
                  <p className="font-bold text-gray-800 text-lg">{bookingData.timeSlot}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Payment Date</p>
                  <p className="font-bold text-gray-800">{paymentDetails?.date}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Status</p>
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                    {paymentDetails?.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-10 text-left">
              <p className="text-blue-800 font-semibold">
                A confirmation email has been sent to <strong className="text-blue-900">{bookingData.email}</strong> with all the details and a calendar invitation.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('home');
                setBookingData({ name: '', email: '', phone: '', date: '', timeSlot: '', service: '' });
                setPaymentData({ cardNumber: '', cardName: '', expiry: '', cvv: '' });
                setPaymentDetails(null);
              }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default BookingApp;