export default {
  getResourceFirebase (firebase) {
    return firebase.firestore().collection('Recursos').get()
  },
  resourceFirebase (firebase) {
    return firebase.firestore().collection('Recursos')
  }
}
