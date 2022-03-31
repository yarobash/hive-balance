export default {
  nonexistentApiary: (id: any) => `Apiary: ${id} doesn't exist`,
  apiarylessUser: (id: any) => `User ${id} doesn't have any apiary`,
  nonexistentFrame: (id: any) => `Frame: ${id} doesn't exist`,
  nonexistentFrams: () => 'Frames don\'t exist',
  nonexistentStandardFrame: () => 'Frame with type: standard doesn\'t exist',
  ownerlessFrame: (owner) => `Frame with owner: ${owner} doesn't exist`,
};
