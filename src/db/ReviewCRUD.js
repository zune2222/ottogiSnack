import firebaseInit from "../firebaseInit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

//Review 객체
class ReviewObj {
  constructor(obj) {
    if (obj.id == null) this.id = "";
    else this.id = obj.id;
    this.menu_id = obj.menu_id;
    this.taste_score = obj.taste_score;
    this.amount_score = obj.amount_score;
    this.price_score = obj.price_score;
  }
}

//Review 경로 만들기
function getReviewPos(menu_id) {
  return "menus/" + menu_id + "/reviews";
}

//Review DB에 생성
async function createReview(review) {
  try {
    const docRef = await addDoc(
      collection(firebaseInit.db, getReviewPos(review.menu_id)),
      {
        taste_score: review.taste_score,
        amount_score: review.amount_score,
        price_score: review.price_score,
      }
    );
    review.id = docRef.id;
    return review;
  } catch (e) {
    throw "Review Create Error : " + e;
  }
}

//쿼리로 해당 Menu Id 의 Review 읽기
async function readReviewUseQueryByMenuId(query, menu_id) {
  const docSnap = await getDocs(query);
  let reviewList = new Array();
  docSnap.forEach((doc) => {
    const thisReview = new ReviewObj(doc.data());
    thisReview.id = doc.id;
    thisReview.menu_id = menu_id;
    reviewList.push(thisReview);
  });
  return reviewList;
}

//해당 Menu Id의 모든 Review 읽기
async function readAllReviewByMenuId(menu_id) {
  return readReviewUseQueryByMenuId(
    collection(firebaseInit.db, getReviewPos(menu_id)),
    menu_id
  );
}

//해당 Menu Id의 해당 Review Id 인 Review 읽기
async function readReviewByMenuIdAndReviewId(menu_id, review_id) {
  const docRef = doc(firebaseInit.db, getReviewPos(menu_id), review_id);
  const docSnap = await getDoc(docRef);
  const gotReview = new ReviewObj(docSnap.data());
  gotReview.id = review_id;
  gotReview.menu_id = menu_id;
  return gotReview;
}

//Review 업데이트 하기
async function updateReview(review) {
  await updateDoc(
    doc(firebaseInit.db, getReviewPos(review.menu_id), review.id),
    {
      taste_score: review.taste_score,
      amount_score: review.amount_score,
      price_score: review.price_score,
    }
  );
}

//맛 평가 점수 업데이트 하기
async function updateReviewTasteScore(review, newScore) {
  await updateDoc(
    doc(firebaseInit.db, getReviewPos(review.menu_id), review.id),
    {
      taste_score: newScore,
    }
  );
  review.taste_score = newScore;
}

//양 평가 점수 업데이트 하기
async function updateReviewAmountScore(review, newScore) {
  await updateDoc(
    doc(firebaseInit.db, getReviewPos(review.menu_id), review.id),
    {
      amount_score: newScore,
    }
  );
  review.amount_score = newScore;
}

//가성비 평가 점수 업데이트 하기
async function updateReviewPriceScore(review, newScore) {
  await updateDoc(
    doc(firebaseInit.db, getReviewPos(review.menu_id), review.id),
    {
      price_score: newScore,
    }
  );
  review.price_score = newScore;
}

//해당 Review 삭제하기
async function deleteReview(review) {
  await deleteDoc(
    doc(firebaseInit.db, getReviewPos(review.menu_id), review.id)
  );
}

export default {
  ReviewObj,
  createReview,
  readReviewUseQueryByMenuId,
  readAllReviewByMenuId,
  readReviewByMenuIdAndReviewId,
  updateReview,
  updateReviewTasteScore,
  updateReviewAmountScore,
  updateReviewPriceScore,
  deleteReview,
};
