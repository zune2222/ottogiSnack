import firebaseInit from "../firebaseInit";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import ReviewCRUD from "./ReviewCRUD";

//Menu 객체 (DB에 이렇게 저장된다)
class MenuObj {
  constructor(obj) {
    if (obj.id == null) this.id = "";
    else this.id = obj.id;
    this.name = obj.name;
    this.name_en = obj.name_en;
    this.name_ch = obj.name_ch;
    this.image = obj.image;
    this.price = obj.price;
    this.explain = obj.explain;
    this.detail = obj.detail;
    if (obj.thumb == null) this.thumb = 0;
    else this.thumb = obj.thumb;
    if (obj.reviews == null) this.reviews = new Array();
    else this.reviews = obj.reviews;
    if (obj.isRecommended == null) this.isRecommended = false;
    else this.isRecommended = obj.isRecommended;
  }
}

//Menu DB에 생성
async function createMenu(menu) {
  try {
    const docRef = await addDoc(collection(firebaseInit.db, "menus"), {
      name: menu.name,
      name_en: menu.name_en,
      name_ch: menu.name_ch,
      image: menu.image,
      price: menu.price,
      explain: menu.explain,
      detail: menu.detail,
      thumb: menu.thumb,
      isRecommended: menu.isRecommended,
    });
    menu.id = docRef.id;
    return menu;
  } catch (e) {
    throw "Menu Create Error : " + e;
  }
}

//쿼리로 Menu 읽기
async function readMenuUseQuery(query) {
  const docSnap = await getDocs(query);
  let menuList = new Array();
  docSnap.forEach(async (doc) => {
    const thisMenu = new MenuObj(doc.data());
    thisMenu.id = doc.id;
    thisMenu.reviews = await ReviewCRUD.readAllReviewByMenuId(thisMenu.id);
    menuList.push(thisMenu);
  });
  return menuList;
}

//모든 Menu 읽기
async function readAllMenu() {
  return readMenuUseQuery(collection(firebaseInit.db, "menus"));
}

//추천된 Menu 모두 읽기
async function readMenuOnlyRecommended() {
  return readMenuUseQuery(
    query(
      collection(firebaseInit.db, "menus"),
      where("isRecommended", "==", true)
    )
  );
}

//해당 아이디의 Menu 읽기
async function readMenuById(id) {
  const docRef = doc(firebaseInit.db, "menus", id);
  const docSnap = await getDoc(docRef);
  const gotMenu = new MenuObj(docSnap.data());
  console.log(docSnap.data());
  gotMenu.id = id;
  gotMenu.reviews = await ReviewCRUD.readAllReviewByMenuId(gotMenu.id);
  return gotMenu;
}

//Menu 업데이트 하기 (id 기준으로 찾고 나머지 정보는 다 바꾼다)
async function updateMenu(menu) {
  await updateDoc(doc(firebaseInit.db, "menus", menu.id), {
    name: menu.name,
    name_en: menu.name_en,
    name_ch: menu.name_ch,
    image: menu.image,
    price: menu.price,
    explain: menu.explain,
    detail: menu.detail,
    thumb: menu.thumb,
    isRecommended: menu.isRecommended,
  });
}

//Menu 추천하기
async function recommendMenu(menu) {
  await updateDoc(doc(firebaseInit.db, "menus", menu.id), {
    isRecommended: true,
  });
  menu.isRecommended = true;
}

//Menu 추천안하기
async function derecommendMenu(menu) {
  await updateDoc(doc(firebaseInit.db, "menus", menu.id), {
    isRecommended: false,
  });
  menu.isRecommended = false;
}

//Menu 좋아요 하기
async function thumbUpToMenu(menu) {
  menu.thumb = menu.thumb + 1;
  await updateDoc(doc(firebaseInit.db, "menus", menu.id), {
    thumb: menu.thumb,
  });
}

//Menu 좋아요 취소하기
async function cancelThumbUpToMenu(menu) {
  menu.thumb = menu.thumb - 1;
  await updateDoc(doc(firebaseInit.db, "menus", menu.id), {
    thumb: menu.thumb,
  });
}

//해당 Menu 삭제하기
async function deleteMenu(menu) {
  menu.reviews.forEach(async (review) => {
    await ReviewCRUD.deleteReview(review);
  });
  await deleteDoc(doc(firebaseInit.db, "menus", menu.id));
}

export default {
  MenuObj,
  createMenu,
  readMenuUseQuery,
  readAllMenu,
  readMenuOnlyRecommended,
  readMenuById,
  updateMenu,
  recommendMenu,
  derecommendMenu,
  thumbUpToMenu,
  cancelThumbUpToMenu,
  deleteMenu,
};
