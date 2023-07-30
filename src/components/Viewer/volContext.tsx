// import React, {createContext, useEffect, useState} from 'react';
// // vol. context
// // to store the last vol. I checked
//
// interface VolContextProps {
//     vol: string | null;
//     setVol: (vol: string | null) => void;
// }
//
// export const VolContext = createContext<VolContextProps>({
//     vol: null,
//     setVol: () => {},
// });
//
//
// export const VolProvider: React.FC = ({ children }) => {
//     const [vol, setVol] = useState<string | null>(() => {
//         const storedVol = localStorage.getItem('vol');
//         return storedVol ? storedVol : null;
//     });
//
//     useEffect(() => {
//         localStorage.setItem('vol', vol || '');
//     }, [vol]);
//
//     return (
//         <VolContext.Provider value={{ vol, setVol }}>
//             {children}
//         </VolContext.Provider>
//     );
// };
