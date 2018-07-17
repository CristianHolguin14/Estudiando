  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwguz8XIdadAO4hYxzOkwMYizrfrLFyRs",
    authDomain: "chat-b50b7.firebaseapp.com",
    databaseURL: "https://chat-b50b7.firebaseio.com",
    projectId: "chat-b50b7",
    storageBucket: "chat-b50b7.appspot.com",
    messagingSenderId: "846803188817"
  };
  firebase.initializeApp(config);

// Agregamos la instancia de la BD
  const database = firebase.database();