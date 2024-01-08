import Link from 'next/link';
import { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        promoCode: '',
        pickupDate: '',
        pickupTime: '',
        pickupLocation: '',
        dropOffLocation: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (

        <form onSubmit={handleSubmit} className='grid gap-2 grid-cols-2'>
            <div className="col-span-2">
                <label htmlFor="name" className="block mb-1 text-white">
                    Your Name
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block mb-1 text-white">
                    Phone number<span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 text-white">
                    Email Id
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div>
                <label htmlFor="promoCode" className="block mb-1 text-white">
                    Promo Code
                </label>
                <input
                    type="text"
                    id="promoCode"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div>
                <label htmlFor="pickupDate" className="block mb-1 text-white">
                    Pick Up Date<span className="text-red-500">*</span>
                </label>
                <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div>
                <label htmlFor="pickupTime" className="block mb-1 text-white">
                    Pick Up Time<span className="text-red-500">#</span>
                </label>
                <input
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div>
                <label htmlFor="pickupLocation" className="block mb-1 text-white">
                    Pick Up Location<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="col-span-2">
                <label htmlFor="dropOffLocation" className="block mb-1 text-white">
                    Final Drop Off Location<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="dropOffLocation"
                    name="dropOffLocation"
                    value={formData.dropOffLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="col-span-2">
                <p>
                    <Link href="/terms-and-conditions" className="redClr underline">
                        Click here to view Terms & Conditions
                    </Link>
                </p>
            </div>
            <button
                type="submit"
                className="w-full col-span-2 py-2 px-4 bg-btn text-white rounded  lg:text-lg text-sm"
            >
                Submit
            </button>
        </form>

    );
};

export default BookingForm;
