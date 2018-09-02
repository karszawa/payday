import { db } from '../firebase';
import { WorkRecord } from '@/lib/types';

export async function newWorkRecord(workRecord: WorkRecord) {
  await db.collection('workRecords').add({
    uid: workRecord.uid,
    startedAt: workRecord.startedAt,
    endedAt: workRecord.endedAt,
    content: workRecord.content,
  });
}
