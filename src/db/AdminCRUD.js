import firebaseInit from "../firebaseInit";
import { deleteDoc, getDoc, setDoc, updateDoc, doc } from "firebase/firestore";
import crypto from "crypto-js";

//암호화
function encryptPassword(password, salt, iv) {
  if (salt === undefined)
    salt = crypto.lib.WordArray.random(128 / 8).toString(crypto.enc.Hex);
  if (iv === undefined)
    iv = crypto.lib.WordArray.random(128 / 8).toString(crypto.enc.Hex);
  const iterations = 10000;
  const key = crypto.PBKDF2(
    process.env.REACT_APP_SECRETKEY,
    crypto.enc.Hex.parse(salt),
    {
      keySize: 512 / 32,
      iterations,
    }
  );
  const encrypted = crypto.AES.encrypt(password, key, {
    iv: crypto.enc.Hex.parse(iv),
  }).toString();
  return {
    encrypted: encrypted,
    salt: salt,
    iv: iv,
  };
}

//Admin 객체
class AdminObj {
  constructor(obj, encrypted = false) {
    this.adress = obj.adress;
    this.telephon = obj.telephon;
    this.account = obj.account;
    this.id = obj.id;
    if (encrypted) {
      this.password = obj.password;
      this.salt = obj.salt;
      this.iv = obj.iv;
    } else {
      const encrypted = encryptPassword(obj.password);
      this.password = encrypted.encrypted;
      this.salt = encrypted.salt;
      this.iv = encrypted.iv;
    }
  }
}

//Admin DB에 생성
async function createAdmin(admin) {
  try {
    await setDoc(doc(firebaseInit.db, "admin", "admin"), {
      adress: admin.adress,
      telephon: admin.telephon,
      account: admin.account,
      id: admin.id,
      password: admin.password,
      salt: admin.salt,
      iv: admin.iv,
    });
    return admin;
  } catch (e) {
    throw "Admin Create Error : " + e;
  }
}

//Admin 읽기
async function readAdmin() {
  const docRef = doc(firebaseInit.db, "admin", "admin");
  const docSnap = await getDoc(docRef);
  const gotAdmin = new AdminObj(docSnap.data(), true);
  return gotAdmin;
}

//로그인 정보 확인
async function login(id, password, encrypted = false) {
  const admin = await readAdmin();
  if (id != admin.id) {
    return { success: false, reason: "id" };
  } else {
    if (!encrypted) password = encryptPassword(password, admin.salt, admin.iv);
    if (password != admin.password) {
      return { success: false, reason: "pwd" };
    } else {
      return { success: true, admin: admin };
    }
  }
}

//id 변경
async function updateAdminId(admin, newId) {
  await updateDoc(doc(firebaseInit.db, "admin", "admin"), {
    id: newId,
  });
  admin.id = newId;
}

//password 변경
async function updateAdminPassword(admin, newPassword) {
  const encrypted = encryptPassword(newPassword);
  await updateDoc(doc(firebaseInit.db, "admin", "admin"), {
    password: encrypted.encrypted,
    salt: encrypted.salt,
    iv: encrypted.iv,
  });
  admin.password = encrypted.encrypted;
  admin.salt = encrypted.salt;
  admin.iv = encrypted.iv;
}

//Admin 업데이트 하기
async function updateAdmin(admin) {
  const loginCheck = await login(admin.id, admin.password, true);
  if (!loginCheck.success) {
    throw "id or password is different:" + loginCheck.reason;
  } else {
    await updateDoc(doc(firebaseInit.db, "admin", "admin"), {
      adress: admin.adress,
      telephon: admin.telephon,
      accout: admin.account,
    });
  }
}

//Admin 삭제하기
async function deleteAdmin(admin) {
  await deleteDoc(doc(firebaseInit.db, "admin", "admin"));
}

export default {
  AdminObj,
  createAdmin,
  readAdmin,
  login,
  updateAdminId,
  updateAdminPassword,
  updateAdmin,
  deleteAdmin,
};
