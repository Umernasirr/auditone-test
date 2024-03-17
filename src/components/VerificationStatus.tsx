// import React, { useState, useEffect } from 'react';
// import getVerificationStatus from '../api/verificationStatus';
// import useKYC from '../hooks/useKYC';

// const VerificationStatus = ({ type }) => {
//   const [status, setStatus] = useState(null);
//   const {getKycStatusOfSpace} = useKYC()

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await (type);
//       setStatus(data);
//     };

//     fetchData();
//   }, [type]);

//   if (!status) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>{`Verification Status for ${type}:`}</h2>
//       <p>Status: {status.status.label}</p>
//       <p>Is Verified: {status.isVerified ? 'Yes' : 'No'}</p>
//       {status.attributes.map((attr, index) => (
//         <div key={index}>
//           <p>{attr.label}: {attr.status.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VerificationStatus;
