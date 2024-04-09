import React from 'react';

const doctors = [
    { name: 'Dr. Smith', available: true },
    { name: 'Dr. Johnson', available: false },
    { name: 'Dr. Williams', available: true },
    { name: 'Dr. Jones', available: false },
    { name: 'Dr. Smith', available: true },
    { name: 'Dr. Johnson', available: false },
    { name: 'Dr. Williams', available: true },
    { name: 'Dr. Jones', available: false },
];

const DoctorsList = () => {
    return (
        <div className="flex flex-wrap justify-around p-6">
            {doctors.map((doctor, i) => (
                <div key={i} className="card bg-blue-500 text-white w-64 p-6 m-4 rounded shadow-lg">
                    <h2 className="text-2xl mb-4">{doctor.name}</h2>
                    <p className={doctor.available ? 'text-green-500' : 'text-red-500'}>
                        {doctor.available ? 'Available' : 'Occupied'}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default DoctorsList;