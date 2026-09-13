import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { get, onValue, ref, runTransaction, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getDownloadURL, ref as storageRef, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { auth, database, storage } from "./firebase-config.js";

export async function registerAccount(role, account) {
  const credential = await createUserWithEmailAndPassword(auth, account.email, account.password);
  const profile = { ...account, role, uid: credential.user.uid };
  delete profile.password;
  await set(ref(database, `profiles/${credential.user.uid}`), profile);
  return credential.user;
}

export async function loginAccount(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const profileSnapshot = await get(ref(database, `profiles/${credential.user.uid}`));
  return { user: credential.user, profile: profileSnapshot.val() };
}

export async function saveClass(classData) {
  await set(ref(database, `classes/${classData.id}`), classData);
}

export function watchClasses(callback) {
  return onValue(ref(database, 'classes'), snapshot => callback(snapshot.val() || {}));
}

export async function addAttendance(classId, student) {
  const key = btoa(encodeURIComponent(student.email || student.name)).replace(/[^a-zA-Z0-9]/g, '');
  await runTransaction(ref(database, `classes/${classId}`), current => {
    if (!current) return current;
    const scannedStudents = current.scannedStudents || {};
    scannedStudents[key] = student;
    return { ...current, scannedStudents, joinedCount: Object.keys(scannedStudents).length };
  });
}

export async function saveNote(note, file) {
  const filePath = `notes/${note.id}-${file.name}`;
  const uploaded = await uploadBytes(storageRef(storage, filePath), file);
  const fileData = await getDownloadURL(uploaded.ref);
  await set(ref(database, `notes/${note.id}`), { ...note, fileData, storagePath: filePath });
}

export function watchNotes(callback) {
  return onValue(ref(database, 'notes'), snapshot => callback(snapshot.val() || {}));
}
