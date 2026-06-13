// import React, { useState, useEffect } from 'react';
// import styles from './Discover.module.css'; 

// export default function Discover() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // دالة الجلب المباشرة باستخدام فتش عادي سطر وراء سطر
//   const fetchFlavors = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // 1. جلب الصورة الأولى (البيتزا الأصلية)
//       const res1 = await fetch('https://lh3.googleusercontent.com/aida-public/AB6AXuBL3aWuHteF9JrtowoItHJK3XDq9pdKfWVwJN8LhXAv-f8UMgI8796w5KGEaZD_R7pEeFtdo4T8sW7a3F5qXzbl6U2YedpVveBkRirM_MI8nzD9NDE6do9lDBwmBHFuYqqA0HUlsnvaDEQqriPtVvzlNVMXJkDHjegTC32sikXqSK0QHnFc0-aNlVj3RveTLB1FCrRiIy8M_55GJSCFNdIzYDtwjvHNMYvAP8g9jDZlvHYZEAdfnbGez3XnFNh0GwmcwRS6nIJlnFc');
//       if (!res1.ok) throw new Error('error fetch first photo');
//       const data1 = await res1.json();
//       const img1 = data1.imageUrl || data1.url;

//       // 2. جلب الصورة الثانية (المقبلات)
//       const res2 = await fetch('https://lh3.googleusercontent.com/aida-public/AB6AXuAHMEK5EHG8XCe7cdoVlxxgMJN9_GIDVBa2dWihYbFkdywta_43M8u9H8DDXw1TtbymZdqLzKoE1HcQR6_VxseLibsuLLfxsu0Olw1-IDqpwZMi8rzB-hkQSKF3zqI6HP10Qy7AUZsDsX7rv3K7bk971XXHu2VS04ajZa5ZlzRo0_QaNQthGykad7EX9VOfKPXS-bF74VBkirSI18-if5_Stg5ujzInYopbD2VV0MYsfWMFJDxt6uVEIQP5xzWZj4IhaJgSpxDfjN0');
//       if (!res2.ok) throw new Error('فشل جلب الصورة الثانية');
//       const data2 = await res2.json();
//       const img2 = data2.imageUrl || data2.url;

//       // 3. جلب الصورة الثالثة (بيتزا الهالبينو)
//       const res3 = await fetch('https://lh3.googleusercontent.com/aida-public/AB6AXuCSlRZmLM1sirlT5cf00hBV5yJzU6W4NwEkb58uWRLkgyZdD0xsOQ0bXhEHPiNhZS-nxel1dwa2ow6okrpfKtbP-FRtuWZoaGb9WHTs9RcqMGlOJrQiyQmtveVJDiT7AgpM-nHYGqysOAP1QDjAdi6tN6bChxDB8VJZ0-8zuds3I35YXovNWQyUZgfm8d6_omeVpqMsPXmA0-wTIq6Kej37O0cmVsRWDbbjjzY6AcgBKKmLFK8dDqhfd8QyNzpZ9J-kk3qog0v5Dtg');
//       if (!res3.ok) throw new Error('فشل جلب الصورة الثالثة');
//       const data3 = await res3.json();
//       const img3 = data3.imageUrl || data3.url;

//       // 4. جلب الصورة الرابعة (الصلصات)
//       const res4 = await fetch('https://lh3.googleusercontent.com/aida-public/AB6AXuBrbRyzIvy-_kCjsVNqsJauvSAKZ4AvpF5Xo-LGtJ_3Og6xzkuHMx-bJfR17xfuLlZvpVNtT-kP-3nhRORo03LMaC5g4G_eNslDcHU1-d1gYCbqBV4wUbAI2vZ2MG4HO9ZMaxDUmT9mcSwwztUbGMp4LNcduL4MomecAx5ue--33syir9UoYve8s6fhVkOV62XR4trYV1ygWQdkXbaCuS9GGxysHSR0W3kjstO8HH0n00kBuLdZSaSPnzJtRkvveLW3Blo8w5akfiM');
//       if (!res4.ok) throw new Error('فشل جلب الصورة الرابعة');
//       const data4 = await res4.json();
//       const img4 = data4.imageUrl || data4.url;

//       // تجميع الروابط الأربعة في الـ State بعد اكتمال جلبهم جميعاً
//       setImages([img1, img2, img3, img4]);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false); // إغلاق مؤشر التحميل في النهاية دائماً
//     }
//   };

//   useEffect(() => {
//     fetchFlavors();
//   }, []);

//   if (loading) {
//     return (
//       <div className={`${styles.nocturnalSection} d-flex justify-content-center align-items-center`}>
//         <div className="spinner-border text-light" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.nocturnalSection}>
//         <div className="container">
//           <div className="alert alert-danger text-center" role="alert">
//             حدث خطأ: {error}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className={styles.nocturnalSection}>
//       <div className="container">
//         <h2 className={`text-center ${styles.cravingsTitle}`}>Discover Our Flavors</h2>
        
//         <div className="row">
//           {/* الصورة الكبيرة على اليسار (الموقع الأول) */}
//           <div className="col-md-6 mb-4 mb-md-0">
//             <div className={styles.pizzaImageWrapper}>
//               <img src={images[0] } alt="Original Pizza" className={styles.pizzaImg} />
//               <span className={styles.orangeBadge}>Original</span>
//             </div>
//           </div>

//           {/* الصور الأخرى على اليمين */}
//           <div className="col-md-6">
//             <div className="row h-100">
              
//               {/* صورتين فوق بعض */}
//               <div className="col-sm-6 d-flex flex-column justify-content-between">
//                 {/* صورة المقبلات (الموقع الثاني) */}
//                 <div className={styles.sideImageWrapper}>
//                   <img src={images[1] || 'https://via.placeholder.com/300x200'} alt="Sides" className={styles.pizzaImg} />
//                 </div>
//                 {/* صورة الصلصات (الموقع الرابع) */}
//                 <div className={styles.sideImageWrapper} style={{ marginBottom: 0 }}>
//                   <img src={images[3] || 'https://via.placeholder.com/300x200'} alt="Sauces" className={styles.pizzaImg} />
//                 </div>
//               </div>

//               {/* الصورة الطولية على اليمين (الموقع الثالث) */}
//               <div className="col-sm-6">
//                 <div className={styles.pizzaImageWrapper}>
//                   <img src={images[2] || 'https://via.placeholder.com/300x420'} alt="Spicy Pizza" className={styles.pizzaImg} />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }