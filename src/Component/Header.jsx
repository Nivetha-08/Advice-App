// import React, { useEffect, useState } from 'react'
// import Main from './Main';
// import "./style.css"

// const Header = () => {

//     const [advice, setAdvice]=useState("");
//     const [loading,setLoading]=useState(false);
//     const [error,setError]=useState(false);
//     const [count, setCount]=useState(0);  

    
//     // const data = await fetch(`https://api.adviceslip.com/advice`);

//     useEffect(()=>{
//         if(count>0)
//         {
//             try{
//                 async function fetchdata()
//                 {
//                     const data = await fetch(`https://api.adviceslip.com/advice`);
//                     console.log(data);
    
//                     if(!data.ok){
//                         setLoading(false);
//                         setError(true);
//                     }
    
//                     const mydata = await data.json();
//                     console.log(mydata);
    
//                     setAdvice(mydata);
//                     setLoading(false);
    
//                 }
//                 fetchdata();
//             }
        
    
//         catch(e)
//         {
//             console.log(e);
//         }
//     }
//     },[count])

//     if(loading){
//         return(
//             <>
//                 <p>Loading please wait...</p>
//             </>
//         )
//     }

//     if(error){
//         return(
//             <>
//                 <p>Error occured</p>
//             </>
//         )
//     }

//     function fun()
//     {
//         setCount(count+1);
//     }

//   return (
//     <Main advice={advice} count={count} fun={fun}/>
//   )
// }

// export default Header

import React, { useEffect, useState } from 'react';
import Main from './Main';
import './style.css';

const Header = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      setLoading(true);
      setError(false);

      async function fetchAdvice() {
        try {
          const res = await fetch('https://api.adviceslip.com/advice');
          if (!res.ok) throw new Error('Network error');

          const data = await res.json();
          setAdvice(data.slip.advice);
          setLoading(false);
        } catch (e) {
          console.error(e);
          setError(true);
          setLoading(false);
        }
      }

      fetchAdvice();
    }
  }, [count]);

  const handleGetAdvice = () => {
    setCount(prev => prev + 1);
  };

  if (loading) return <div className="text-center mt-5">⏳ Loading advice...</div>;
  if (error) return <div className="text-center text-danger mt-5">⚠️ Failed to fetch advice. Please try again.</div>;

  return <Main advice={advice} count={count} fun={handleGetAdvice} />;
};

export default Header;
