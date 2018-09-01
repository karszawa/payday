import 'firebase/firestore';
import { WorkRecord } from './types';

export function docToWorkRecord(doc: firebase.firestore.QueryDocumentSnapshot): WorkRecord {
  const data = doc.data();

  return {
    id: doc.id,
    startedAt: data.startedAt.toDate(),
    endedAt: data.endedAt.toDate(),
    content: data.content,
    intervals: [],
  };
}
