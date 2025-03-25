import ClassRoom from './0-classroom';

export default function initializeRooms(maxStudents = [19, 20, 34]) {
  const classRooms = [];
  for (const maxStudent of maxStudents) {
    classRooms.push(new ClassRoom(maxStudent));
  }
  return classRooms;
}
