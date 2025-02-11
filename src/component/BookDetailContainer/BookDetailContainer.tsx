// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Book } from "../../types";
// import axios from "axios";
// import React from "react";

// const BookDetailContainer = () => {
//     const { id } = useParams<{ id: string }>(); // useParams의 타입을 명확하게 지정
//     const [book, setBook] = useState<Book | null>(null);

//     console.log("📌 useParams()로 받은 id:", id); // 디버깅 코드 추가

//     useEffect(() => {
//         if (!id) {
//             console.error("🚨 Error: id가 undefined 입니다."); // 에러 로그 추가
//             return;
//         }

//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/books/${id}`);
//                 console.log("✅ 서버에서 받아온 데이터:", response.data); // 서버 응답 확인
//                 setBook(response.data);
//             } catch (error) {
//                 console.error("❌ Axios fetch error:", error); // 에러 로그 추가
//             }
//         };

//         fetchBook();
//     }, [id]);

//     return (
//         <div className="detail">
//             <h2 className="book-title">{book ? book.name : "Loading..."}</h2>
//         </div>
//     );
// };

// export default BookDetailContainer;
