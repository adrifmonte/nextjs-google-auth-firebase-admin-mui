import db from '../firebase/_db';

// https://cloud.google.com/firestore/docs/samples/firestore-data-get-as-map?hl=pt-br
export async function findUserById(id: string) {
    if (!id) {
        return;
    }

    const userSnapshot = await db.collection('users').doc(id).get();
    const userDocument = userSnapshot.data();
    return userDocument;
}

// https://cloud.google.com/firestore/docs/samples/firestore-data-set-doc-upsert?hl=pt-br
export async function patchUser(id: string, userProfile) {
    if (!id) {
        return;
    }

    return await db.collection('users').doc(id).set(userProfile, { merge: true });
}
