import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewList: [
    {
      id: 0,
      userID: "jeon",
      category: "short",
      productName: "슬림 핏",
      size: "S",
      rating: 5,
      comment: "핏이 정말 예뻐요",
      image: "short-slim-red-front.jpg",
      color: "red",
      date: "2022-11-19",
    },
    {
      id: 1,
      userID: "sun",
      category: "short",
      productName: "슬림 핏",
      size: "M",
      rating: 4,
      comment: "색감이 너무 좋습니다!",
      image: "short-slim-white-front.jpg",
      color: "white",
      date: "2022-11-20",
    },
    {
      id: 2,
      userID: "jun",
      category: "short",
      productName: "스탠다드 핏",
      size: "L",
      rating: 5,
      comment: "품질이 좋습니다",
      image: "short-stnadard-gray-front.jpg",
      color: "gray",
      date: "2022-11-18",
    },
    {
      id: 3,
      userID: "jung",
      category: "short",
      productName: "릴렉스 핏",
      size: "M",
      rating: 4,
      comment: "다른 색도 사고 싶어요",
      image: "short-stnadard-beige-front.jpg",
      color: "beige",
      date: "2022-11-20",
    },
    {
      id: 4,
      userID: "yeon",
      category: "long",
      productName: "스탠다드 핏",
      size: "S",
      rating: 3,
      comment: "조금 커요",
      image: "long-standard-white-front.jpg",
      color: "white",
      date: "2022-11-23",
    },
    {
      id: 5,
      userID: "jungkook",
      category: "long",
      productName: "스탠다드 핏",
      size: "L",
      rating: 5,
      comment: "요즘 매일 입어요",
      image: "long-standard-black-front.jpg",
      color: "black",
      date: "2022-12-01",
    },
    {
      id: 6,
      userID: "jimin",
      category: "long",
      productName: "릴렉스 핏",
      size: "S",
      rating: 5,
      comment: "선물용으로도 좋아요",
      image: "long-standard-blue-front.jpg",
      color: "blue",
      date: "2022-12-02",
    },
    {
      id: 7,
      userID: "namjun",
      category: "long",
      productName: "릴렉스 핏",
      size: "L",
      rating: 4,
      comment: "맘에 들어요~",
      image: "long-standard-khaki-front.jpg",
      color: "khaki",
      date: "2022-12-05",
    },
  ],
};

const reviewSlice = createSlice({
  name: "reviewList",
  initialState,
  reducers: {
    // 리뷰쓰기
    writeReivew: (state, action) => {
      const newReview = {
        id: null,
        userID: null,
        reviewID: null,
        productID: null,
        category: null,
        productName: null,
        size: null,
        color: null,
        rating: null,
        comment: null,
      };
      state.review.push(newReview);
    },
    // 리뷰출력

    // 리뷰수정
  },
});

export const { writeReview } = reviewSlice.actions;
export default reviewSlice.reducer;
