import { db } from '../firebase';
import { WorkRecord } from '@/lib/types';

export async function newWorkRecord(workRecord: WorkRecord) {
  return await db.collection('workRecords').add({
    uid: workRecord.uid,
    startedAt: workRecord.startedAt,
    endedAt: workRecord.endedAt,
    content: workRecord.content,
  });
}

export async function updateWorkRecord(id: string, workRecord: WorkRecord) {
  return await db.collection('workRecords').doc(id).set({
    uid: workRecord.uid,
    startedAt: workRecord.startedAt,
    endedAt: workRecord.endedAt,
    content: workRecord.content,
  });
}
