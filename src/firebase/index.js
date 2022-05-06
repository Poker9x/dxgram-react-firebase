import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore, collection, doc, orderBy, query, onSnapshot, addDoc, getDocs } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCwSyzGlf8RoGfpY3Ll6j-nAb1i0NNKEJI",
    authDomain: "chat-app-d5d5b.firebaseapp.com",
    databaseURL: "https://chat-app-d5d5b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-app-d5d5b",
    storageBucket: "chat-app-d5d5b.appspot.com",
    messagingSenderId: "543551402471",
    appId: "1:543551402471:web:819542477cf67d704a4d42",
    measurementId: "G-64NX9CHHKD"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore()


const login = {
    auth: getAuth(),
    ggProvider: new GoogleAuthProvider(),
    signPopup: signInWithPopup
}
class FB {
    constructor(name) {
        this.col = collection(db, name)
        // this.doc = doc(db,name)
    }
    add(data) {
        addDoc(this.col, {
            ...data,
            time: Date.now()
        })
    }
    all() {
        const q = query(this.col, orderBy('time'))

        return new Promise(async (ok, err) => {
            const getDoc = await getDocs(q)
            const docs = await getDoc.docs
            let doc = []
            docs.map(k => {
                doc.push({ ...k.data(), documentId: k.id })
            })
            ok(doc)
        })
    }
    row(where) {
        const q = query(this.col, orderBy('time'))

        return new Promise(async (ok, err) => {
            const getDoc = await getDocs(q)
            const docs = await getDoc.docs
            let doc = []
            docs.map(k => {
                doc.push({ ...k.data(), documentId: k.id })
            })
            let result = []
            for (var i in where) {
                result = doc.filter(e => e[i] == where[i])
            }
            ok(result)
        })
    }
    not(where) {
        const q = query(this.col, orderBy('time'))

        return new Promise(async (ok, err) => {
            const getDoc = await getDocs(q)
            const docs = await getDoc.docs
            let doc = []
            docs.map(k => {
                doc.push({ ...k.data(), documentId: k.id })
            })
            let result = []
            for (var i in where) {
                result = doc.filter(e => e[i] != where[i])
            }
            ok(result)
        })
    }
    onall(ok) {
        const q = query(this.col, orderBy('time'))
        const getDoc = onSnapshot(q, snap => {
            const docs = snap.docs
            let doc = []
            docs.map(k => {
                doc.push({ ...k.data(), documentId: k.id })
            })
            ok(doc)
        })
    }
    onrow(where,ok) {
        const q = query(this.col, orderBy('time'))

        const getDoc = onSnapshot(q, snap => {
            const docs = snap.docs
            let doc = []
            docs.map(k => {
                doc.push({ ...k.data(), documentId: k.id })
            })
            let result = []
            for (var i in where) {
                result = doc.filter(e => e[i] == where[i])
            }
            ok(result)
        })
    }
    
}

export { login }
export default FB